import React from "react";
import SectionHead from "../SectionHead/SectionHead";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";

import { Badge } from "../ui/badge";

function BestSelling() {
  return (
    <>
      <SectionHead title={"Best Selling"}>
        <div className="my-5 px-5">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="lg:basis-1/5 md:basis-1/4 sm:basis-1/3 ">
                <Card className="flex relative flex-col justify-center items-center text-center py-2">
                  <CardContent className=" h-[150px] bg-[url('https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg')] bg-contain bg-no-repeat bg-center lg:w-3/4 w-full"></CardContent>
                  <CardHeader className="w-full ">
                    <CardTitle className="flex flex-col gap-2 items-start text-start w-full">
                      <span className=" font-light text-lg hover:border-black border-b border-transparent cursor-pointer">
                        Jacket
                      </span>
                      <span className="text-[#DB4444]">$ 109.95</span>
                      <span className="flex text-[#FFAD33] w-full items-center gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <span className="text-gray-400 relative top-2 text-[12px] font-light">
                          (65)
                        </span>
                      </span>
                    </CardTitle>
                    <Badge className="absolute top-0 end-2" variant="destructive">
                      Out of stock
                    </Badge>
                    <Badge
                      className="absolute top-8 end-2 text-center justify-center rounded-full cursor-pointer p-0 h-[40px] w-[40px]"
                      variant="outline"
                    >
                      <CiHeart className="hover:text-red-500 text-2xl font-bold" />
                    </Badge>
                  </CardHeader>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
      </SectionHead>
    </>
  );
}

export default BestSelling;
