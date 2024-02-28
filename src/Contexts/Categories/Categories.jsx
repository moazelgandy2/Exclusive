import SectionHead from "@/components/SectionHead/SectionHead";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { CiDesktop } from "react-icons/ci";

import React, { useEffect, useState } from "react";

function Categories() {
  return (
    <>
      <SectionHead title={"Categories"}>
        <div className="categ my-5">
          <Carousel className="mx-5">
            <CarouselContent className="my-1 flex justify-center items-center">
              <CarouselItem className="lg:basis-1/6 md:basis-1/4 sm:basis-1/3">
                <Card className="flex flex-col justify-center hover:bg-[#DB4444] hover:text-white transition-all ease-linear cursor-pointer items-center border border-[#BDBDBD]">
                  <CardHeader className="font-light text-5xl">
                    <CiDesktop />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>Electronics</CardTitle>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/6 md:basis-1/4 sm:basis-1/3">
                <Card className="flex flex-col justify-center hover:bg-[#DB4444] hover:text-white transition-all ease-linear cursor-pointer items-center border border-[#BDBDBD]">
                  <CardHeader className="font-light text-5xl">
                    <CiDesktop />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>Electronics</CardTitle>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/6 md:basis-1/4 sm:basis-1/3">
                <Card className="flex flex-col justify-center hover:bg-[#DB4444] hover:text-white transition-all ease-linear cursor-pointer items-center border border-[#BDBDBD]">
                  <CardHeader className="font-light text-5xl">
                    <CiDesktop />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>Electronics</CardTitle>
                  </CardContent>
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

export default Categories;
