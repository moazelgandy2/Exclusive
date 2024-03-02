import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Card, CardContent, CardDescription, CardFooter, CardTitle, CardHeader } from "../ui/card";
import SectionHead from "../SectionHead/SectionHead";
import { Badge } from "../ui/badge";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import CategoryCard from "./CategoryCard";
import CategorySkelton from "./CategorySkelton";

function Category() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [outOfStock, setOutOfStock] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const { categ } = useParams();
  useEffect(() => {
    if (categ.toLowerCase().includes("women")) {
      setLoading(true);
      // Route
      axios.get("https://ecommerce.routemisr.com/api/v1/products").then((res) => {
        setProducts(res.data.data.filter((prod) => prod.category.name === "Women's Fashion"));
        setLoading(false);
      });
      setLoading(true);
      // FakeStore
      axios.get("https://fakestoreapi.com/products/category/women's%20clothing").then((res) => {
        setOutOfStock(res.data);
        setLoading(false);
      });

      //
    } else if (categ.toLowerCase().includes("men")) {
      setLoading(true);
      // Route
      axios.get("https://ecommerce.routemisr.com/api/v1/products").then((res) => {
        setProducts(res.data.data.filter((prod) => prod.category.name === "Men's Fashion"));
        setLoading(false);
      });
      // FakeStore
      setLoading(true);

      axios.get("https://fakestoreapi.com/products/category/men's%20clothing").then((res) => {
        setOutOfStock(res.data);
        setLoading(false);
      });
    } else if (categ.toLowerCase().includes("jewelery")) {
      setLoading(true);
      // FakeStore
      axios.get("https://fakestoreapi.com/products/category/jewelery").then((res) => {
        setOutOfStock(res.data);
        setLoading(false);
      });
    } else if (categ.toLowerCase().includes("electronics")) {
      setLoading(true);
      // Route
      axios.get("https://ecommerce.routemisr.com/api/v1/products").then((res) => {
        setProducts(res.data.data.filter((prod) => prod.category.name === "Electronics"));
        setLoading(false);
      });
      // FakeStore
      setLoading(true);
      axios.get("https://fakestoreapi.com/products/category/electronics").then((res) => {
        setOutOfStock(res.data);
        setLoading(false);
      });
    } else {
      navigate("/404");
    }
  }, [categ, navigate]);

  useEffect(() => {
    console.log(products, outOfStock);
  }, [products, outOfStock]);

  return (
    <>
      <SectionHead title={categ.toUpperCase()}>
        <section className="relative grid gap-5 grid-cols-12 items-center lg:px-12 md:px-8 px-5 my-12">
          {loading ? (
            <>
              <CategorySkelton />
              <CategorySkelton />
              <CategorySkelton />
              <CategorySkelton />
            </>
          ) : (
            ""
          )}
          {products != []
            ? products.map((prod) => {
                return (
                  <div key={prod.id} className="lg:col-span-3 md:col-span-6 col-span-12">
                    <CategoryCard
                      key={prod.id}
                      id={prod.id}
                      title={prod.title}
                      price={prod.price}
                      img={prod.imageCover}
                      rating={prod.ratingsAverage}
                    />
                  </div>
                );
              })
            : ""}

          {outOfStock != [] ? (
            outOfStock.map((prod) => {
              return (
                <div key={prod.id} className="lg:col-span-3 md:col-span-6 col-span-12">
                  <Card className="h-[500px]">
                    <CardHeader className="h-[300px] overflow-hidden relative items-center flex justify-center">
                      <img
                        src={prod.image}
                        className="w-1/2"
                        alt={(prod.title, "Image")}
                        loading="lazy"
                      />
                      <Badge className="absolute top-1 bg-[#EF4444] hover:bg-[#F26969] right-2">
                        <span className="text-white">Out of stock</span>
                      </Badge>
                    </CardHeader>
                    <CardTitle className="p-2">
                      <h2>{prod?.title}</h2>
                    </CardTitle>
                    <CardContent>
                      <div className="price flex gap-2 justify-start items-center">
                        <span className="text-[#DB4444]">EGP {prod.price * 30}</span>
                        <span className="text-gray-500 line-through">EGP {prod.price * 38}</span>
                      </div>
                      <div className="rate relative mt-3 text-[#FFAD33] flex">
                        <span className="flex gap-1">{renderStars(prod.rating.rate)}</span>
                        <span className=" relative top-1 right-0 text-[12px] font-semibold text-[#FFAD33]">
                          ({prod.rating.rate})
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <button
                        disabled
                        className="lg:w-2/3 w-4/5 disabled:bg-[#DB4444] bg-[#DB4444] p-1 rounded-sm text-white"
                      >
                        Add to cart
                      </button>
                    </CardFooter>
                  </Card>
                </div>
              );
            })
          ) : (
            <CategorySkelton />
          )}
        </section>
      </SectionHead>
    </>
  );
}

export default Category;
