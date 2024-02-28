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

function BestSelling() {
  return (
    <>
      <SectionHead title={"Best Selling"}>
        <div className="my-5 px-5">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-1/5">
                <Card className="flex flex-col justify-center h-[260px] items-center text-center py-2">
                  <CardContent className="w-2/3">
                    <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="" />
                  </CardContent>
                  <CardHeader>
                    <CardTitle>dhh</CardTitle>
                  </CardHeader>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/5">
                <Card className="flex flex-col h-[260px] justify-center items-center text-center py-2">
                  <CardContent className="w-2/3">
                    <img src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" alt="" />
                  </CardContent>
                  <CardHeader>
                    <CardTitle>dhh</CardTitle>
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
