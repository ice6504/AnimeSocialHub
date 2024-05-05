import Link from "next/link";

function Header() {
  return (
    <>
      <div className="navbar py-3 bg-secondary text-base-100 fixed inset-x-0 top-0 z-50">
        <div className="navbar-start space-x-2">
          <Link
            href="/"
            className="max-sm:hidden text-primary font-semibold text-2xl text-center transition-all ease-in-out duration-300 px-4 active:scale-95"
          >
            Anihub
          </Link>
          {/* search */}
          <label className="input input-sm h-10 w-28 sm:w-40 focus-within:sm:w-64 hover:sm:w-64 text-secondary rounded-full flex items-center gap-2 transition-all ease-in-out duration-500">
            <i className="fa-solid fa-magnifying-glass font-bold"></i>
            <input type="text" className="grow placeholder:font-medium font-medium" placeholder="Search" />
          </label>
        </div>
        <div className="navbar-center sm:hidden">
          <Link
            href="/"
            className="text-primary font-semibold text-2xl text-center transition-all ease-in-out duration-300 px-4 active:scale-95"
          >
            Anihub
          </Link>
        </div>
        <div className="navbar-end">
          <Link href="" className="btn btn-circle btn-ghost">
            <i className="fa-solid fa-comment-dots fa-2xl"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
