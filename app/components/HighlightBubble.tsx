import { Link } from "react-router";
import type { Highlight } from "~/schemas/highlights.schema";

type HighlightBubbleProps = {
  highlight: Highlight;
};

export function HighlightBubble({ highlight }: HighlightBubbleProps) {
  return (
    <Link
      to={`/profile/highlights/${highlight.id}`}
      className="flex flex-col items-center space-y-1 hover:opacity-80 transition"
    >
      <div className="w-20 h-20 rounded-full border-2 border-pink-500 overflow-hidden">
        <img
          src={highlight.cover_image_url}
          alt={highlight.title || "Highlight cover"}
          className="object-cover w-full h-full"
        />
      </div>
      <span className="text-sm text-center truncate w-20">
        {highlight.title || "Untitled"}
      </span>
    </Link>
  );
}
