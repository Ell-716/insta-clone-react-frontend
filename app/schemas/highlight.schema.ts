import { z } from "zod";

// First, we declare a zod schema
const highlightSchema = z.object({
  id: z.number(),
  cover_image_url: z.string().url(),
  title: z.string().nullable(),
});

const highlightsArraySchema = z.array(highlightSchema);

type Highlight = z.infer<typeof highlightSchema>;

export { highlightSchema, highlightsArraySchema };
export type { Highlight };
