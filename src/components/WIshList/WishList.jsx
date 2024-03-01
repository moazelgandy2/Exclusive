import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FaCartPlus } from "react-icons/fa";
import { Badge } from "../ui/badge";
import SectionHead from "../SectionHead/SectionHead";

function WishList() {
  return (
    <>
      <div className="lg:px-12 md:px-10 sm:px-8 my-16">
        <SectionHead title={"Wish list"}>
          <Carousel className="w-4/5 my-5 mx-auto">
            <CarouselContent className="gap-4 mx-2">
              <CarouselItem className="lg:basis-1/4 md:basis-1/3 sm:basis-1/2 rounded-lg p-0 overflow-hidden border border-[#eeecec]">
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
                  </CardHeader>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </SectionHead>
      </div>
    </>
  );
}

export default WishList;
