import type { Reel } from "~/schemas/reel.schema";

export function ReelGridItem({ reel }: { reel: Reel }) {
  return (
    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg bg-gray-200 shadow hover:shadow-md hover:scale-[1.01] transition-all duration-200">
      <img
        src={reel.thumbnail_url}
        alt={reel.caption || "Reel thumbnail"}
        className="w-full h-full object-cover"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* Views */}
      <div className="absolute bottom-2 left-2 text-white text-xs font-medium flex items-center bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
        ▶️ <span className="ml-1">{reel.views}</span>
      </div>
    </div>
  );
}
