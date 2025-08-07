import { Heart, MessageCircle, Send } from "lucide-react";
import type { Post } from "~/schemas/post.schema";

const BACKEND_URL = "http://localhost:3000";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-md mb-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-300" /> {/* Avatar placeholder */}
          <p className="font-semibold text-sm">webeet_user</p>
        </div>
        <span className="text-lg text-gray-500">•••</span>
      </div>

      {/* Image */}
      <img
        src={`${BACKEND_URL}${post.img_url}`}
        alt={post.caption || "Instagram post"}
        className="w-full aspect-square object-cover"
      />

      {/* Actions */}
      <div className="flex items-center gap-4 px-4 pt-3 text-gray-800">
        <Heart className="w-5 h-5 hover:text-red-500 cursor-pointer" strokeWidth={1.5} />
        <MessageCircle className="w-5 h-5 hover:text-blue-500 cursor-pointer" strokeWidth={1.5} />
        <Send className="w-5 h-5 hover:text-green-500 cursor-pointer -rotate-[335deg]" strokeWidth={1.5} />
      </div>

      {/* Caption */}
      <div className="px-4 py-2">
        <p className="text-sm">
          <span className="font-semibold mr-2">webeet_user</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
}
