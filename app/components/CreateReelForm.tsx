import { Form, useNavigation } from "react-router";
import { useState } from "react";

export function CreateReelForm() {
  const nav = useNavigation();
  const isSubmitting = nav.state === "submitting";
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbUrl, setThumbUrl] = useState("");
  const [caption, setCaption] = useState("");

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Create New Reel</h2>
      <Form method="post" className="space-y-4">
        <div>
          <label htmlFor="video_url" className="block text-sm font-medium mb-1">Video URL</label>
          <input id="video_url" name="video_url" type="url" required
                 value={videoUrl} onChange={e=>setVideoUrl(e.target.value)}
                 placeholder="https://example.com/video.mp4"
                 className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
        </div>
        <div>
          <label htmlFor="thumbnail_url" className="block text-sm font-medium mb-1">Thumbnail URL</label>
          <input id="thumbnail_url" name="thumbnail_url" type="url" required
                 value={thumbUrl} onChange={e=>setThumbUrl(e.target.value)}
                 placeholder="https://example.com/thumb.jpg"
                 className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
        </div>
        <div>
          <label htmlFor="caption" className="block text-sm font-medium mb-1">Caption (optional)</label>
          <textarea id="caption" name="caption" rows={3} value={caption}
                    onChange={e=>setCaption(e.target.value)}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Write a caption..."/>
        </div>
        <button type="submit" disabled={isSubmitting}
                className="w-full py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50">
          {isSubmitting ? "Creating..." : "Create Reel"}
        </button>
      </Form>
    </div>
  );
}
