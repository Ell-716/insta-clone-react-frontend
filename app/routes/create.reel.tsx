import type { ActionFunctionArgs } from "react-router";
import { redirect } from "react-router";
import { api } from "~/services/api";
import { CreateReelForm } from "~/components/CreateReelForm";

export async function action({ request }: ActionFunctionArgs) {
  const fd = await request.formData();
  const video_url = String(fd.get("video_url") || "");
  const thumbnail_url = String(fd.get("thumbnail_url") || "");
  const caption = String(fd.get("caption") || "");

  await api.post("/reels", { video_url, thumbnail_url, caption });
  return redirect("/profile/reels/grid");
}

export default function CreateReelPage() {
  return (
    <div className="py-8">
      <CreateReelForm />
    </div>
  );
}
