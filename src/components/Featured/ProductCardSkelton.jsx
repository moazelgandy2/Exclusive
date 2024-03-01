import React from "react";
import { Card } from "../ui/card";
import { CarouselItem } from "../ui/carousel";
import { Skeleton } from "../ui/skeleton";

function ProductCardSkelton() {
  return (
    <>
      <CarouselItem className="lg:basis-1/3 md:basis-1/3 m-0 sm:basis-1/2 rounded-lg p-0 overflow-hidden">
        <Card className="w-full px-5 border border-[#eeecec] relative overflow-hidden">
          <Skeleton className="w-full my-2 h-[250px]" />
          <Skeleton className="w-1/2 my-1 h-[20px]" />
          <Skeleton className="w-1/3 my-1 h-[10px]" />
          <Skeleton className="w-1/2 my-1 h-[10px]" />
          <div className="btn w-1/2 mx-auto my-3">
            <Skeleton className="w-full h-[30px]" />
          </div>
        </Card>
      </CarouselItem>
    </>
  );
}

export default ProductCardSkelton;
