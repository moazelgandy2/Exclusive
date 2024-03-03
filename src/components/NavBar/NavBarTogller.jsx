import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { TokenContext } from "../Contexts/Token";
import { useContext, useEffect, useState } from "react";

export function NavBarTogller() {
  const { token, setToken } = useContext(TokenContext);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (token === null) {
      setDisabled(true);
    }
  }, [token]);
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    setToken(null);
    window.location("/").reload;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className=" focus-visible:ring-0" variant="outline">
          <FaBarsStaggered />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <Link to={"/"}>
            <DropdownMenuItem>
              <IoHome />
              <span className="ml-2">Home</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="font-bold">Categories</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <Link to={"/category/women'sClothing"}>
                  <DropdownMenuItem>Women's Fashion</DropdownMenuItem>
                </Link>
                <Link to={"/category/men'sClothing"}>
                  <DropdownMenuItem>Men's Fashion</DropdownMenuItem>
                </Link>
                <Link to={"/category/electronics"}>
                  <DropdownMenuItem>Electronics</DropdownMenuItem>
                </Link>
                <Link to={"/category/jewelery"}>
                  <DropdownMenuItem>Jewelery</DropdownMenuItem>
                </Link>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="font-bold">Brands</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <Link to={"/brands"}>
                  <DropdownMenuItem>Explore now</DropdownMenuItem>
                </Link>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <Link to={"/login"} className={!disabled ? "hidden" : ""}>
          <DropdownMenuItem>Login</DropdownMenuItem>
        </Link>
        <Link to={"/register"} className={!disabled ? "hidden" : ""}>
          <DropdownMenuItem>Register</DropdownMenuItem>
        </Link>
        <DropdownMenuItem className={disabled ? "hidden" : ""} onClick={handleLogout}>
          Log out
          <DropdownMenuShortcut className={"text-2xl"}>
            <CiLogout />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
