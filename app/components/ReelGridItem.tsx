import type { Reel } from "~/schemas/reel.schema";
import { Heart, MessageCircle, Send } from "lucide-react";

export function ReelGridItem({ reel }: { reel: Reel }) {
  const initial = (reel.author?.[0] || "M").toUpperCase();

  return (
    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg bg-gray-200 shadow hover:shadow-md hover:scale-[1.01] transition-all duration-200">
      <img
        src={reel.thumbnail_url}
        alt={reel.caption || "Reel thumbnail"}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

      {/* Right-side actions */}
      <div className="absolute right-2 bottom-4 md:bottom-6 flex flex-col items-center gap-4 text-white">
        <button className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition" aria-label="Like">
          <Heart size={22} />
        </button>
        <button className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition" aria-label="Comment">
          <MessageCircle size={22} />
        </button>
        <button className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition" aria-label="Share">
          <Send size={22} />
        </button>
      </div>

      {/* Bottom-left: avatar + username, then caption under it */}
      <div className="absolute left-2 right-14 bottom-10 text-white">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-7 w-7 rounded-full bg-white/30 flex items-center justify-center text-xs font-bold backdrop-blur-sm">
            {initial}
          </div>
          <span className="text-sm font-semibold max-w-[140px] truncate">
            {reel.author}
          </span>
        </div>
      </div>

      {/* Caption under the username (closer to the bottom) */}
      <div className="absolute left-2 right-14 bottom-5 text-white text-xs leading-tight overflow-hidden max-h-10">
        {reel.caption ?? ""}
      </div>

      {/* Views pill stays lowest-left */}
      <div className="absolute bottom-2 left-2 text-white text-[11px] font-medium flex items-center bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
        ▶️ <span className="ml-1">{reel.views}</span>
      </div>
    </div>
  );
}
