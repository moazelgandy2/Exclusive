import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card } from "@/components/ui/card";
import SectionHead from "../SectionHead/SectionHead";

function Featured() {
  return (
    <>
      <SectionHead title="Featured Products">
        <div className="products relative">
          <Carousel className="mx-5 my-5">
            <CarouselContent className="px-8">
              <CarouselItem className="lg:basis-1/5 md:basis-1/3 sm:basis-1/2 rounded-lg p-0 overflow-hidden border border-[#eeecec]">
                <Card className="border-0 shadow-lg">
                  <img
                    src="https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg"
                    alt=""
                  />
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
