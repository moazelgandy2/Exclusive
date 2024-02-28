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
          <Carousel className="w-full max-w-full">
            <CarouselContent>
              <CarouselItem className="lg:basis-1/5 md:basis-1/4 sm:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">1</span>
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
