import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import { taggedArraySchema, type Tagged } from "~/schemas/tagged.schema";
import { PostCard } from "~/components/PostCard";

export async function loader() {
  try {
    const response = await api.get("/tagged/grid");
    return taggedArraySchema.parse(response.data);
  } catch (error) {
    console.error("Failed to load tagged posts:", error);
    throw new Response("Could not load tagged posts.", { status: 500 });
  }
}

export default function TaggedGrid() {
  const tagged = useLoaderData() as Tagged[];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {tagged.map((item) => (
        <PostCard key={item.id} post={{ id: item.id, img_url: item.img_url }} />
      ))}
    </div>
  );
}
