import React, { useEffect, useState } from "react";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Badge } from "../ui/badge";
import { CarouselItem } from "../ui/carousel";
import classNames from "classnames";

function BestSellingItem({ title, price, rating, image }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={fullStars} />);
    }

    return stars;
  };
  return (
    <>
      <CarouselItem className="lg:basis-1/5 md:basis-1/4 sm:basis-1/3 ">
        <Card className="flex  h-[450px] relative flex-col justify-center items-center text-center py-2">
          <CardContent
            className={classNames("h-[150px] bg-contain bg-no-repeat bg-center lg:w-3/4 w-full")}
            style={image ? { backgroundImage: `url(${image})` } : null}
          ></CardContent>

          <CardHeader className="w-full">
            <CardTitle className="flex flex-col gap-2 items-start text-start w-full">
              <span className=" font-light text-lg hover:border-black border-b border-transparent cursor-pointer">
                {title}
              </span>
              <span className="text-[#DB4444]">{price} EGP</span>
              <span className="flex text-[#FFAD33] w-full items-center gap-1">
                {renderStars(rating)}
                <span className="text-[#FFAD33] relative top-2 text-[12px] font-light">
                  ({rating})
                </span>
              </span>
            </CardTitle>
            <Badge className="absolute top-0 end-2" variant="destructive">
              Out of stock
            </Badge>
          </CardHeader>
        </Card>
      </CarouselItem>
    </>
  );
}

export default BestSellingItem;
