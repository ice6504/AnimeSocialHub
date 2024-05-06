// components
import NewPost from "./components/NewPost";
import Aside from "./components/Aside";
import Post from "./components/Post";

export default function Home() {
  return (
    <div className="lg:container lg:mx-auto px-5 lg:px-10 xl:px-16 grid lg:grid-cols-4 grid-flow-row gap-5">
      <div className="lg:col-span-3 space-y-3 sm:space-y-5">
        <NewPost />
        <Post />
      </div>
      <Aside />
    </div>
  );
}
