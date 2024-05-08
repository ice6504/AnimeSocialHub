import Contact from "./components/Contact";

function page() {
  return (
    <div className="h-screen grid lg:grid-cols-3 grid-flow-row  pt-20 lg:pt-[4.6rem] px-1 pb-1 gap-1">
      {/* Contact */}
      <div className="bg-secondary rounded-3xl overflow-y-scroll h-full p-2">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
      {/* Chat */}
      <div className="col-span-2 rounded-3xl relative max-lg:hidden">
        {/* HeadChat */}
        <div className="absolute top-0 inset-x-0 bg-primary rounded-t-[1.25rem] h-16 p-5 flex justify-between items-center text-base-100 z-10">
          <h3 className="font-medium text-xl">Name</h3>
          <button className="btn btn-circle btn-sm btn-ghost text-lg text-base-100">
            <i className="fa-solid fa-circle-info fa-2xl"></i>
          </button>
        </div>
        {/* ChatRoom */}
        <div className="h-full flex flex-col justify-end rounded-3xl pb-24 px-3 border-4 border-secondary">
          <div className="overflow-y-scroll">
            <div className="chat chat-start">
              <div className="chat-bubble max-w-96">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                consequatur.
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble max-w-96">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
          </div>
        </div>
        {/* Message */}
        <div className="absolute bottom-0 inset-x-0 bg-secondary h-20 rounded-b-2xl flex items-center gap-1 px-3 z-10">
          <input
            type="text"
            placeholder="Message..."
            className="input input-bordered rounded-full w-full"
          />
          <button className="btn btn-ghost btn-circle text-base-100">
            <i className="fa-regular fa-paper-plane fa-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
