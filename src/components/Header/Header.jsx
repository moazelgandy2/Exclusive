import React from "react";
import Head from "../../assets/head.png";
import { IoIosArrowRoundForward } from "react-icons/io";

function Header() {
  return (
    <>
      <div className="px-14 py-4 grid grid-cols-12 pt-0">
        <aside className="col-span-2 font-semibold me-4 border-r border-[#B3B3B3] mt-0 pt-0">
          <ul className="flex flex-col items-start gap-12 pt-5">
            <li>Men's clothing</li>
            <li>Women's clothing</li>
            <li>Electronics</li>
          </ul>
        </aside>
        <div className="col-span-10 flex justify-end items-center relative pt-5">
          <img src={Head} alt="" />
          <button className=" absolute flex items-center border-b border-transparent text-white bottom-5 left-8 hover:border-b hover:border-white ease-linear transition-all">
            Shop Now <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
