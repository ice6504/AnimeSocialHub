import Image from "next/image";

// components
import Post from "../components/Post";

function page({ params }) {
  return (
    <div className="lg:container sm:mx-auto px-5 sm:px-10 xl:px-20 pt-24">
      <div className="bg-primary rounded-t-3xl p-10 grid max-sm:place-items-center gap-5">
        <div className="flex max-sm:flex-col items-center gap-3 sm:gap-5">
          <div className="avatar">
            <div className="size-32 bg-secondary rounded-full">
              <Image
                className="w-full"
                src="/next.svg"
                alt="User"
                width={0}
                height={0}
                priority={true}
              />
            </div>
          </div>
          <div className="text-base-100 flex flex-col gap-3 max-sm:items-center">
            <h1 className="text-3xl font-medium">{params.username}</h1>
            <button className="btn btn-secondary">
              Edit Profile <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-3 gap-3 text-xl text-base-100 sm:px-3 w-fit">
          <div className="flex max-sm:flex-col items-center text-center gap-2">
            <strong>135</strong>
            <span>Following</span>
          </div>
          <div className="divider divider-horizontal divider-secondary sm:hidden"></div>
          <div className="flex max-sm:flex-col items-center sm:justify-center text-center gap-2">
            <strong>35</strong>
            <span>Follower</span>
          </div>
          <div className="divider divider-horizontal divider-secondary sm:hidden"></div>
          <div className="flex max-sm:flex-col items-center text-center gap-2">
            <strong>13</strong>
            <span>Likes</span>
          </div>
        </div>
      </div>
      <div className="border-x-4 border-secondary h-full pt-10 px-10 space-y-5">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default page;
