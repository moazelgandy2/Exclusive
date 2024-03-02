import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import SectionHead from "../SectionHead/SectionHead";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { WishListContext } from "../Contexts/WishList";
import ProductCard from "../Featured/ProductCard";
import { Helmet } from "react-helmet";

function WishList() {
  const { wishList, getWishList } = useContext(WishListContext);

  const [getList, setGetList] = useState(false);

  useEffect(() => {
    renderList();
  }, [getList]);

  async function renderList() {
    await getWishList();
    setGetList(true);
  }

  return (
    <>
      <Helmet>
        <title>Wish list</title>
        <meta name="description" content={`Wish list page`} />
      </Helmet>
      <div className="lg:px-12 md:px-10 sm:px-8 my-16 relative">
        <SectionHead title={"Wish list"} className="my-16">
          <Carousel className="w-full my-5 mx-auto">
            <CarouselContent className="gap-4 mx-2">
              {wishList.length != 0 ? (
                wishList.map((prod) => {
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
              ) : (
                <CarouselItem className="min-h-[300px] flex justify-center items-center">
                  <h2>Your Wishlist is currently empty. Let's fill it with dreams and desires!</h2>
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </SectionHead>
        <Link
          to={"/"}
          className="absolute text-white left-1/2 transform -translate-x-1/2 -bottom-14 p-2 rounded-sm bg-[#DB4444] hover:bg-[#f54a4a]"
        >
          Back to home page
        </Link>
      </div>
    </>
  );
}

export default WishList;
