import { z } from "zod";

// First, we declare a zod schema
const postSchema = z.object({
  id: z.number(),
  img_url: z.string(),
  caption: z.string().nullable(),
  created_at: z.string(),
});

export const postsSchema = z.array(postSchema);

// Schema for creating a new post (for frontend validation)
export const createPostInputSchema = z
  .object({
    caption: z.string().min(1, "Caption is required.").max(255).optional(),
    image: z.instanceof(File).optional(), // For file input
  })
  .refine((data) => data.caption || data.image, {
    message: "Either an image or a caption is required.",
    path: ["image"], // Attach error to image field if both are missing
  });

export type CreatePostInput = z.infer<typeof createPostInputSchema>;
export type Post = z.infer<typeof postSchema>;
