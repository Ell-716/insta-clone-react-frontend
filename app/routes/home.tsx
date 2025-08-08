// routes/home.tsx
import { loader } from "./posts.all";
import PostsGrid from "./posts.all";

export { loader };

export default function Home() {
  return <PostsGrid />;
}
