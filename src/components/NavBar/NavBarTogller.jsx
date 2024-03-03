import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
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

export function NavBarTogller() {
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
