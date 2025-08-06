import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import { highlightsSchema, type Highlight } from "~/schemas/highlights.schema";
import { HighlightBubble } from "~/components/HighlightBubble";

export async function loader() {
  try {
    const response = await api.get("/highlights");
    return highlightsSchema.parse(response.data);
  } catch (error) {
    console.error("Failed to load highlights:", error);
    throw new Response("Could not load highlights.", { status: 500 });
  }
}

export default function HighlightsGrid() {
  const highlights = useLoaderData() as Highlight[];

  return (
    <div className="flex gap-4 overflow-x-auto p-4">
      {highlights.map((highlight) => (
        <HighlightBubble key={highlight.id} highlight={highlight} />
      ))}
    </div>
  );
}
