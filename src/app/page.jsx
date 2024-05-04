// components
import NewPost from "./components/NewPost";
import Aside from "./components/Aside";

export default function Home() {
  return (
    <div className="lg:container lg:mx-auto px-5 lg:px-10 xl:px-16 grid lg:grid-cols-4 grid-flow-row gap-5">
      <div className="lg:col-span-3">
        <NewPost />
      </div>
      <Aside />
    </div>
  );
}
