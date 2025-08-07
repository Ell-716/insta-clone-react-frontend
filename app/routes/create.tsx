import type { ActionFunctionArgs } from "react-router";
import { redirect } from "react-router";
import { CreatePostForm } from "~/components/CreatePostForm";
import { api } from "~/services/api";
import { createPostInputSchema } from "~/schemas/post.schema";
import { z } from "zod";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const caption = formData.get("caption")?.toString();
  const imageFile = formData.get("image") as File;

  // Client-side validation against Zod schema
  const validationResult = createPostInputSchema.safeParse({
    caption,
    image: imageFile,
  });

  if (!validationResult.success) {
    // You might want to return errors to the form, e.g., via `json`
    // For simplicity, we'll just log and redirect for now.
    console.error(
      "Client-side validation failed:",
      validationResult.error.issues,
    );
    return redirect("/create"); // Redirect back to the form
  }

  const payload = new FormData();
  if (validationResult.data.caption) {
    payload.append("caption", validationResult.data.caption);
  }
  if (validationResult.data.image) {
    payload.append("file", validationResult.data.image); // 'file' is the field name backend expects
  }

  try {
    await api.post("/posts", payload, {
      headers: {
        "Content-Type": "multipart/form-data", // Crucial for file uploads
      },
    });
    return redirect("/profile/posts/grid"); // Redirect to posts grid after successful creation
  } catch (error) {
    console.error("Error creating post:", error);
    // Handle API errors (e.g., show a toast message)
    return { success: false, error: "Failed to create post." };
  }
}

export default function CreatePostPage() {
  return (
    <div className="py-8">
      <CreatePostForm />
    </div>
  );
}
