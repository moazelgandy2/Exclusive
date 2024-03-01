import React, { useEffect, useState } from "react";

// Import components from
import SectionHead from "../SectionHead/SectionHead";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useQuery } from "react-query";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Skeleton } from "../ui/skeleton";
import ProductCardSkelton from "./ProductCardSkelton";

function Featured() {
  function getProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products?limit=10");
  }

  const { isLoading, data, isError } = useQuery("products", getProducts);

  return (
    <>
      <SectionHead title="Featured Products">
        <div className="products relative px-5">
          <Carousel className="my-5">
            <CarouselContent className="ms-2 gap-3">
              {isLoading ? (
                <>
                  <ProductCardSkelton />
                  <ProductCardSkelton />
                  <ProductCardSkelton />
                </>
              ) : (
                data.data.data.map((prod) => {
                  return (
                    <ProductCard
                      key={prod._id}
                      id={prod._id}
                      img={prod.imageCover}
                      title={prod.title}
                      price={prod.price}
                      priceDis={prod.price * 1.51}
                      rating={prod.ratingsAverage}
                    />
                  );
                })
              )}
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
