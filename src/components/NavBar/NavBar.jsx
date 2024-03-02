import React, { useContext, useEffect } from "react";
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
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import logout from "../../assets/images/logout.png";
import { TokenContext } from "../Contexts/Token";
import { CartContext } from "../Contexts/CartContext";
import { MdAccountCircle } from "react-icons/md";

function NavBar() {
  const { token, setToken } = useContext(TokenContext);
  const { cart, getCart } = useContext(CartContext);
  const location = useLocation();
  useEffect(() => {
    getCart();
  }, [location]);
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setToken(null);
    window.location.reload();
  };
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
                        <Link
                          to={"/category/women'sClothing"}
                          className="hover:bg-[#FAFAFA] p-2 cursor-pointer rounded-sm transition-all ease-linear"
                        >
                          Women's Fashion
                        </Link>
                        <Link
                          to={"/category/men'sClothing"}
                          className="hover:bg-[#FAFAFA] p-2 cursor-pointer rounded-sm transition-all ease-linear"
                        >
                          Men's Fashion
                        </Link>
                        <Link
                          to={"/category/electronics"}
                          className="hover:bg-[#FAFAFA] p-2 cursor-pointer rounded-sm transition-all ease-linear"
                        >
                          Electronics
                        </Link>
                        <Link
                          to={"/category/jewelery"}
                          className="hover:bg-[#FAFAFA] p-2 cursor-pointer rounded-sm transition-all ease-linear"
                        >
                          Jewelery
                        </Link>
                      </ul>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Brands</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <ul className="w-[350px] p-2 flex flex-col gap-2">
                        <Link
                          to={"/brands"}
                          className="hover:bg-[#FAFAFA] p-2 cursor-pointer rounded-sm transition-all ease-linear"
                        >
                          Explore now
                        </Link>
                      </ul>
                    </NavigationMenuLink>{" "}
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {token == null ? (
                  <>
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
                  </>
                ) : (
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-center justify-center items-center flex">
                      <button className="Btn" onClick={handleLogout}>
                        <div className="sign">
                          <img src={logout} alt="" className="w-3/5" />
                        </div>
                        <div className="text">Logout</div>
                      </button>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </ul>
        </li>
        <li className="lg:col-span-2 md:col-span-2 col-span-6 items-center">
          <div className="content flex justify-end items-center font-bold text-xl gap-4">
            <Link to={"/wishlist"} className="cursor-pointer">
              <IoHeartOutline />
            </Link>
            <Link to={"/cart"} className="cursor-pointer relative">
              {cart.numOfCartItems ? (
                <span className=" absolute text-[12px] left-3 rounded-lg bottom-2 text-red-500">
                  {cart.numOfCartItems}
                </span>
              ) : (
                ""
              )}

              <BsCart3 />
            </Link>
            <Link to={"/cart"} className="cursor-pointer relative">
              <MdAccountCircle />
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
