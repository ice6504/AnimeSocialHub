import Image from "next/image";

function Contact() {
  return (
    <>
      <div className="flex items-center gap-4 p-4">
        <div className="avatar">
          <div className="w-16 bg-primary rounded-full">
            <Image
              className="w-full"
              src="/next.svg"
              alt="User"
              width={0}
              height={0}
            />
          </div>
        </div>
        <div className="flex flex-col text-base-100">
          <strong>Name</strong>
          <span>lorem ipsum slalssaa assaip......</span>
        </div>
      </div>
    </>
  );
}

export default Contact;
