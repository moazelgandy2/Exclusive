import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";

function NavBar() {
  return (
    <nav className="px-14 py-4 mx-auto border-b border-[#B3B3B3]">
      <ul className="grid grid-cols-12 items-center">
        <li className="logo cursor-pointer lg:col-span-2 md:col-span-2 col-span-6">
          <h3 className="font-bold text-xl">Exclusive</h3>
        </li>
        <li className="lg:col-span-8 md:col-span-8 lg:block md:block hidden">
          <ul className="flex justify-center items-center gap-5">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">SignUp</li>
          </ul>
        </li>
        <li className="lg:col-span-2 md:col-span-2 col-span-6 items-center">
          <div className="content flex justify-end items-center font-bold text-xl gap-4">
            <i className="cursor-pointer">
              <IoHeartOutline />
            </i>
            <i className="cursor-pointer">
              <BsCart3 />
            </i>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
