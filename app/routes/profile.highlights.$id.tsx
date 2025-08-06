import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { api } from "~/services/api";
// Assume you have a highlight schema and a HighlightStory component
// import { highlightSchema, type Highlight } from "~/schemas/highlight.schema";
// import { HighlightStory } from "~/components/HighlightStory";

export async function loader({ params }: LoaderFunctionArgs) {
  // The `params` object contains the dynamic parts of the URL.
  // The key (`id`) matches the filename (`$id.tsx`).
  const highlightId = params.id;

  try {
    const response = await api.get(`/highlights/${highlightId}`);
    // return highlightSchema.parse(response.data);
    return response.data; // Replace with schema parsing
  } catch (error) {
    console.error(error);
    throw new Response("Highlight not found", { status: 404 });
  }
}

export default function HighlightDetail() {
  const highlight = useLoaderData();
  // Add a typeguard to help typescript understand what the highlight is if needed

  return (
    <div>
      <h1>{highlight.title}</h1>
      {/* Render your <HighlightStory /> component here */}
    </div>
  );
}
