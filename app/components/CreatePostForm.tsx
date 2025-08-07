import React, { useState } from "react";
import { Form, useNavigation } from "react-router";
import { createPostInputSchema } from "~/schemas/post.schema";
import { z } from "zod";

type FormErrors = z.ZodIssue[];

export function CreatePostForm() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      setPreviewUrl(null);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]); // Clear previous errors

    // Client-side validation
    const validationResult = createPostInputSchema.safeParse({
      caption,
      image: imageFile || undefined,
    });

    if (!validationResult.success) {
      setErrors(validationResult.error.issues);
      return;
    }

    // If validation passes, proceed with form submission
    const formData = new FormData();
    if (caption) formData.append("caption", caption);
    if (imageFile) formData.append("file", imageFile); // 'file' matches backend expected field name

    // Programmatically submit the form data using useNavigation's form ref
    // (Alternatively, use a ref on the Form component if more complex logic is needed before submission)
    (event.target as HTMLFormElement).submit();
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Create New Post</h2>
      <Form
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Image Preview"
              className="mt-4 max-h-60 w-auto rounded-md shadow-sm mx-auto"
            />
          )}
          {errors.find((e) => e.path[0] === "image") && (
            <p className="mt-2 text-sm text-red-600">
              {errors.find((e) => e.path[0] === "image")?.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="caption"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Caption
          </label>
          <textarea
            id="caption"
            name="caption"
            rows={3}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Write a caption..."
          ></textarea>
          {errors.find((e) => e.path[0] === "caption") && (
            <p className="mt-2 text-sm text-red-600">
              {errors.find((e) => e.path[0] === "caption")?.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Creating..." : "Create Post"}
        </button>
      </Form>
    </div>
  );
}
