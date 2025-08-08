// routes/reels.tsx
import { loader as allReelsLoader } from "./reels.all";
import ReelsAll from "./reels.all";
export { allReelsLoader as loader };
export default function ReelsPage() {
  return <ReelsAll />;
}
