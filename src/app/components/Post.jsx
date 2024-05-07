import Image from "next/image";
import Link from "next/link";

function Post() {
  return (
    <div className="bg-secondary h-fit rounded-3xl card text-base-100">
      <div className="flex items-center gap-3 p-8">
        <Link href="/username">
          <div className="avatar">
            <div className="w-12 sm:w-16 bg-primary rounded-full">
              <Image
                src="/next.svg"
                alt="User"
                width="100"
                height="100"
                priority={true}
              />
            </div>
          </div>
        </Link>
        <div className="flex flex-col">
          <Link
            href="/username"
            className="font-medium text-xl sm:text-2xl sm:hover:text-primary transition-all"
          >
            Username
          </Link>
          <span>2 hours ago</span>
        </div>
      </div>
      <figure className="h-96 object-cover bg-primary rounded-none">
        <Image
          className="w-full"
          src="/next.svg"
          alt="User"
          priority={true}
          width={0}
          height={0}
        />
      </figure>
      <div className="p-5 space-y-2">
        {/* interact */}
        <div className="flex items-center gap-5 text-4xl">
          <label className="swap">
            <input type="checkbox" />
            <i className="fa-regular fa-heart swap-on duration-75"></i>
            <i className="fa-solid fa-heart text-primary swap-off duration-75"></i>
          </label>
          <i className="fa-regular fa-comment"></i>
          <i className="fa-regular fa-paper-plane"></i>
        </div>
        {/* link */}
        <div>125 likes</div>
        <div className="flex sm:items-end space-x-2">
          <Link
            href="/username"
            className="font-medium text-xl sm:hover:text-primary transition-all"
          >
            Username
          </Link>
          <span className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
            voluptate.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;
