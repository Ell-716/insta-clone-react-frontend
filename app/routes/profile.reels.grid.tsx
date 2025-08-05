import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import { reelsSchema, type Reel } from "~/schemas/reel.schema";
import { ReelGridItem } from "~/components/ReelGridItem";

export async function loader() {
  try {
    const response = await api.get("/reels/grid");
    return reelsSchema.parse(response.data);
  } catch (error) {
    console.error("Failed to load reels:", error);
    throw new Response("Could not load reels.", { status: 500 });
  }
}

export default function ReelsGrid() {
  const reels = useLoaderData() as Reel[];
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-1'>
      {reels.map((reel) => (
        <ReelGridItem key={reel.id} reel={reel} />
      ))}
    </div>
  );
}
