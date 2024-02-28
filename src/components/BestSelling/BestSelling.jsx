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

import { Badge } from "../ui/badge";

function BestSelling() {
  return (
    <>
      <SectionHead title={"Best Selling"}>
        <div className="my-5 px-5">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-1/5">
                <Card className="flex relative flex-col justify-center items-center text-center py-2">
                  <CardContent className=" h-[150px] bg-[url('https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg')] bg-contain bg-no-repeat bg-center w-3/4"></CardContent>
                  <CardHeader className="w-full ">
                    <CardTitle className="flex flex-col gap-2 items-start text-start w-full">
                      <span className=" font-light text-lg">Jacket</span>
                      <span className="text-[#DB4444]">$50</span>
                      <span className="flex text-[#FFAD33] w-full items-center gap-3">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                    </CardTitle>
                    <Badge className="absolute top-0 end-2" variant="destructive">
                      Out of stock
                    </Badge>
                  </CardHeader>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/5">
                <Card className="flex relative flex-col justify-center items-center text-center py-2">
                  <CardContent className=" h-[150px] bg-[url('https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg')] bg-contain bg-no-repeat bg-center w-3/4"></CardContent>
                  <CardHeader className="w-full ">
                    <CardTitle className="flex flex-col gap-2 items-start text-start w-full">
                      <span className=" font-light text-lg">Jacket</span>
                      <span className="text-[#DB4444]">$50</span>
                      <span className="flex text-[#FFAD33] w-full items-center gap-3">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                    </CardTitle>
                    <Badge className="absolute top-0 end-2" variant="destructive">
                      Out of stock
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
