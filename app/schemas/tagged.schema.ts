import { z } from "zod";

const taggedItemSchema = z.object({
  id: z.number(),
  img_url: z.string().url(),
  caption: z.string().nullable(),
  user: z.string(),
});

const taggedSchema = z.array(taggedItemSchema);

type Tagged = z.infer<typeof taggedItemSchema>;

export { taggedSchema, taggedItemSchema };
export type { Tagged };
