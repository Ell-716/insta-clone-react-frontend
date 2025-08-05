import { z } from "zod";

const reelSchema = z.object({
  id: z.number(),
  video_url: z.string().url(),
  thumbnail_url: z.string().url(),
  caption: z.string().optional(),
  views: z.number().int().min(0),
  created_at: z.string(),
});

const reelsSchema = z.array(reelSchema);

type Reel = z.infer<typeof reelSchema>;

export { reelSchema, reelsSchema };
export type { Reel };
