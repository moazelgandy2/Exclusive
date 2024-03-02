import React, { useEffect, useState } from "react";
import SectionHead from "../SectionHead/SectionHead";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import BestSellingItem from "./BestSellingItem";

function BestSelling() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=12").then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      <SectionHead title={"Best Selling"}>
        <div className="my-5 px-5">
          <Carousel>
            <CarouselContent>
              {products?.map((prod) => {
                return (
                  <BestSellingItem
                    key={prod.id}
                    image={prod.image}
                    price={prod.price * 30}
                    rating={prod.rating.rate}
                    title={prod.title}
                  />
                );
              })}
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
