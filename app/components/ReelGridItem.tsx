import type { Reel } from "~/schemas/reel.schema";

export function ReelGridItem({ reel }: { reel: Reel }) {
  return (
    <div className='relative w-full aspect-[9/16] overflow-hidden bg-gray-200'>
      <img
        src={reel.thumbnail_url}
        alt={reel.caption || "Reel thumbnail"}
        className='w-full h-full object-cover'
      />
      <div className='absolute bottom-2 left-2 text-white text-sm font-semibold flex items-center'>
        ▶️ {reel.views}
      </div>
    </div>
  );
}
