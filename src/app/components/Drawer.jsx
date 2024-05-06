"use client";
import { useState } from "react";
import Link from "next/link";
import genres from "../../data/genres.json";

// components
import Header from "./Header";

function Drawer({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={toggleDrawer}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Header />
        {/* Page content here */}
        <main className="pt-20 pb-5 min-h-screen">{children}</main>
      </div>
      <div className="drawer-side lg:hidden z-[60]">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <aside className="px-4 py-5 w-80 min-h-full bg-secondary text-base-100 space-y-3">
          {/* SearchBar */}
          <label className="input input-sm h-12 text-secondary rounded-full flex items-center gap-2">
            <i className="fa-solid fa-magnifying-glass font-bold"></i>
            <input
              type="text"
              className="grow placeholder:font-medium font-medium"
              placeholder="Search"
            />
          </label>
          {/* Genres */}
          <ul className="menu menu-lg  rounded-box">
            {genres.map((genre, index) => {
              return (
                <li key={index}>
                  <Link
                    className="focus:text-base-100"
                    href="/"
                    onClick={toggleDrawer}
                  >
                    {genre}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Drawer;
