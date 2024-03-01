import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="px-14 py-4 mx-auto border-b border-[#B3B3B3]">
      <ul className="grid grid-cols-12 items-center">
        <li className="logo cursor-pointer lg:col-span-2 md:col-span-2 col-span-6">
          <Link to="/">
            <h3 className="font-bold text-xl">Exclusive</h3>
          </Link>
        </li>
        <li className="lg:col-span-8 md:col-span-8 lg:block md:block hidden">
          <ul className="flex justify-center items-center gap-5">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <ul className="w-[350px] p-2 flex flex-col gap-2">
                        <li className="hover:bg-[#FAFAFA] p-2 cursor-pointer rounded-sm transition-all ease-linear">
                          Women's Fashion
                        </li>
                        <li className="hover:bg-[#FAFAFA] p-2 cursor-pointer rounded-sm transition-all ease-linear">
                          Women's Fashion
                        </li>
                        <li className="hover:bg-[#FAFAFA] p-2 cursor-pointer rounded-sm transition-all ease-linear">
                          Women's Fashion
                        </li>
                      </ul>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Brands</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <ul className="w-[350px] p-2 flex flex-col gap-2">
                        <li className="hover:bg-[#FAFAFA] p-2 cursor-pointer rounded-sm transition-all ease-linear">
                          Explore now
                        </li>
                      </ul>
                    </NavigationMenuLink>{" "}
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-center items-center flex">
                    <Link
                      to={"/login"}
                      className="hover:bg-[#FAFAFA] px-3 py-2 cursor-pointer rounded-sm"
                    >
                      LogIn
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-center items-center flex">
                    <Link
                      to={"/register"}
                      className="hover:bg-[#FAFAFA] px-3 py-2 cursor-pointer rounded-sm"
                    >
                      Register
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ul>
        </li>
        <li className="lg:col-span-2 md:col-span-2 col-span-6 items-center">
          <div className="content flex justify-end items-center font-bold text-xl gap-4">
            <Link to={"/wishlist"} className="cursor-pointer">
              <IoHeartOutline />
            </Link>
            <Link to={"/cart"} className="cursor-pointer">
              <BsCart3 />
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
