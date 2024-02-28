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
import { IoIosMan } from "react-icons/io";
import { IoIosWoman } from "react-icons/io";

import React, { useEffect, useState } from "react";

function Categories() {
  return (
    <>
      <SectionHead title={"Categories"}>
        <div className="categ my-5 px-5">
          <Carousel className="w-full">
            <CarouselContent className="flex lg:justify-center md:justify-center">
              <CarouselItem className="lg:basis-1/5 md:basis-1/4 sm:basis-1/3">
                <div className="p-1">
                  <Card className="hover:bg-[#DB4444] hover:text-white transition-all ease-linear cursor-pointer">
                    <CardContent className="flex flex-col mb-0 aspect-square items-center justify-center p-6">
                      <p className="text-4xl font-semibold">
                        <CiDesktop className="text-5xl" />
                      </p>
                      <p className="font-bold mt-5">Elctronics</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/5 md:basis-1/4 sm:basis-1/3">
                <div className="p-1">
                  <Card className="hover:bg-[#DB4444] hover:text-white transition-all ease-linear cursor-pointer">
                    <CardContent className="flex flex-col mb-0 aspect-square items-center justify-center p-6">
                      <p className="text-4xl font-semibold">
                        <IoIosMan className="text-5xl" />
                      </p>
                      <p className="font-bold mt-5">Men's clothing</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/5 md:basis-1/4 sm:basis-1/3">
                <div className="p-1">
                  <Card className="hover:bg-[#DB4444] hover:text-white transition-all ease-linear cursor-pointer">
                    <CardContent className="flex flex-col mb-0 aspect-square items-center justify-center p-6">
                      <p className="text-4xl font-semibold">
                        <IoIosWoman className="text-5xl" />
                      </p>
                      <p className="font-bold mt-5">Women's clothing</p>
                    </CardContent>
                  </Card>
                </div>
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

export default Categories;
