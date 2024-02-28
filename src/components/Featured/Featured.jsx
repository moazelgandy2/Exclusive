import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "../ui/badge";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SectionHead from "../SectionHead/SectionHead";

function Featured() {
  return (
    <>
      <SectionHead title="Featured Products">
        <div className="products relative px-5">
          <Carousel className="my-5">
            <CarouselContent className="ms-2">
              <CarouselItem className="lg:basis-1/5 md:basis-1/3 sm:basis-1/2 rounded-lg p-0 overflow-hidden border border-[#eeecec]">
                <Card className="border-0 shadow-lg relative">
                  <CardContent className="w-full">
                    <img
                      className="w-full"
                      src="https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg"
                      alt=""
                    />
                  </CardContent>
                  <CardHeader>
                    <CardTitle>
                      <span>Women Shawl</span>
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="w-[40px] cursor-pointer absolute top-0 end-2 h-[40px] hover:text-red-500 rounded-full bg-transparent"
                    >
                      <FaCartPlus className="text-3xl" />
                    </Badge>
                    <Badge
                      className="absolute top-12 end-2 text-center justify-center rounded-full cursor-pointer p-0 h-[40px] w-[40px]"
                      variant="outline"
                    >
                      <CiHeart className="hover:text-red-500 text-2xl font-bold" />
                    </Badge>
                  </CardHeader>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </SectionHead>
    </>
  );
}

export default Featured;
