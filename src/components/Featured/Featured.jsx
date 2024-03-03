import React, { useContext, useEffect, useState } from "react";

// Import components from
import SectionHead from "../SectionHead/SectionHead";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useQuery } from "react-query";
import axios from "axios";
import ProductCard from "./ProductCard";
import ProductCardSkelton from "./ProductCardSkelton";
import { WishListContext } from "@/components/Contexts/WishList";

function Featured() {
  const { wishList, getWishList } = useContext(WishListContext);
  useEffect(() => {
    getWishList();
  }, []);

  function getProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products?limit=10");
  }

  const { isLoading, data } = useQuery("products", getProducts);

  return (
    <>
      <SectionHead title="Featured Products">
        <div className="products relative px-16">
          <Carousel className="my-5">
            <CarouselContent className="ms-2 gap-3">
              {isLoading && wishList ? (
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
