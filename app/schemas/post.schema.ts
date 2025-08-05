import { z } from "zod";

// First, we declare a zod schema
const postSchema = z.object({
  id: z.number(),
  img_url: z.string().url(),
  caption: z.string().nullable(),
  created_at: z.string(),
});

const postsSchema = z.array(postSchema);

// Then, we infer the TypeScript type from the Zod schema.
type Post = z.infer<typeof postSchema>;

export { postSchema, postsSchema };
export type { Post };
