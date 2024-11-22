// import React from 'react'
import { IoMdSearch } from "react-icons/io";

const MenuLinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

function Navbar() {
  return (
    <div className="bg-white relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center gap-4">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-red-500 font-semibold tracking-widest text-2xl hover:text-red-600 uppercase sm:text-3xl"
            >
              Wonders & Wishes
            </a>
            {/* Menue Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.url}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-red-500"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search bar */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* Dark mode */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
