import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { CarouselItem, CarouselContent } from "../ui/carousel";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

function ProductCard({
  id: id,
  img: img,
  title: title,
  rating: rating,
  price: price,
  priceDis: priceDis,
}) {
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
      <CarouselItem
        key={id}
        className="lg:basis-1/4 md:basis-1/3 m-0 sm:basis-1/2 rounded-lg p-0 overflow-hidden"
      >
        <Card className="w-full border border-[#eeecec] relative overflow-hidden">
          <CardContent className="w-full overflow-hidden min-h-[250px]">
            <img className="w-full" src={img} alt={`${title} image`} loading="lazy" />
          </CardContent>
          <CardHeader>
            <CardTitle>
              <span>{title}</span>
              <div className="price my-3 gap-2 flex">
                <span className="text-[#DB4444] font-bold">EGP {price}</span>
                <span className="text-[#7F7F7F] line-through">EGP {priceDis}</span>
              </div>
              <div className="flex justify-start items-center gap-1 text-[#FFAD33]">
                {renderStars(rating)}

                <span className="text-[12px]">({rating})</span>
              </div>
              <div className="actions w-full flex justify-center items-center mt-5">
                <Link
                  to={`/product/${id}`}
                  className="p-2 bg-[#DB4444] rounded-sm text-white font-normal"
                >
                  View product details
                </Link>
              </div>
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
    </>
  );
}

export default ProductCard;
