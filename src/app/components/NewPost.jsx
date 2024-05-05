import Image from "next/image";

function NewPost() {
  return (
    <div className="w-full card bg-secondary p-5 sm:p-10 gap-5 sm:gap-8 justify-center rounded-3xl">
      <div className="flex justify-between items-center gap-5">
        <div className="avatar">
          <div className="w-14 sm:w-20 bg-primary rounded-full">
            <Image src="/next.svg" alt="User" width="100" height="100" priority={true} />
          </div>
        </div>
        <input
          type="text"
          placeholder="Compose new post"
          className="input sm:input-lg w-full rounded-full placeholder:text-secondary-content"
        />
      </div>
      <div className="flex justify-around text-base-100 sm:px-20">
        <button className="btn btn-ghost font-normal text-xl sm:text-4xl">
          <i className="fa-solid fa-image"></i>
          Photo
        </button>
        <button className="btn btn-ghost font-normal text-xl sm:text-4xl">
          <i className="fa-solid fa-video"></i>
          Video
        </button>
      </div>
    </div>
  );
}

export default NewPost;
