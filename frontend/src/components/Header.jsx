import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";

function Header() {
  const [menu, setMeny] = useState("shop");

  return (
    <div className="flex justify-around p-4 shadow">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="" />
        <p className="text-2xl font-semibold">S H O P</p>
      </div>
      {/* Menu */}
      <ul className="flex items-center list-none gap-12 text-[#626262] text-xl font-light">
        <li
          className="flex flex-col items-center justify-center gap-[0.3rem] cursor-pointer"
          onClick={() => setMeny("shop")}
        >
          Shop
          {menu === "shop" ? (
            <hr className="border-none w-[90%] h-1 rounded-lg bg-red-600" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-[0.3rem] cursor-pointer"
          onClick={() => setMeny("one")}
        >
          One
          {menu === "one" ? (
            <hr className="border-none w-[90%] h-1 rounded-lg bg-red-600" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-[0.3rem] cursor-pointer"
          onClick={() => setMeny("two")}
        >
          Two
          {menu === "two" ? (
            <hr className="border-none w-[90%] h-1 rounded-lg bg-red-600" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-[0.3rem] cursor-pointer"
          onClick={() => setMeny("three")}
        >
          Three
          {menu === "three" ? (
            <hr className="border-none w-[90%] h-1 rounded-lg bg-red-600" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      {/* Login */}
      <div className="flex items-center gap-11">
        <button className="w-32 h-11 outline-none border border-solid border-[#7a7a7a] rounded-[75px] text-xl font-light cursor-pointer active:bg-[#f3f3f3]">
          Login
        </button>
        <img src={cart_icon} alt="" />
        <div className="w-5 h-5 flex items-center justify-center -mt-9 -ml-14 bg-red-600 text-white rounded-xl">
          0
        </div>
      </div>
    </div>
  );
}

export default Header;
