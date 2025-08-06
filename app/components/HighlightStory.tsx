import type { Highlight } from "~/schemas/highlights.schema";

export function HighlightStory({ highlight }: { highlight: Highlight }) {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <img
        src={highlight.cover_image_url}
        alt={highlight.title || "Highlight story"}
        className="max-h-[80%] max-w-full object-contain rounded-lg"
      />
      <p className="text-white text-lg mt-4">{highlight.title}</p>
    </div>
  );
}
