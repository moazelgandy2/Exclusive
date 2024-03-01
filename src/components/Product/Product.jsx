import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { GiBackForth } from "react-icons/gi";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

function Product() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [inViewImg, setInViewImg] = useState("");
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState(0);

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

  useEffect(() => {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`).then((res) => {
      setProduct(res.data.data);
      setInViewImg(res.data.data.imageCover);
      setRating(res.data.data.ratingsAverage);
    });
  }, []);

  const handleImgClick = (e) => {
    setInViewImg(e.target.currentSrc);
  };
  const handleIncrease = () => {
    setQuantity((q) => q + 1);
  };
  const handleDecrease = () => {
    quantity != 1 ? setQuantity((q) => q - 1) : "";
  };
  return (
    <>
      <div className="lg:flex md:flex grid grid-cols-12 lg:w-3/4 md:w-3/4 w-full mx-auto lg:gap-2 md:gap-2 gap-2 px-2 my-12">
        <div className="lg:w-[10%] md:w-[10%] col-span-2 items-center flex flex-col gap-2 justify-center ">
          {product.images ? (
            product.images.map((img, i) => (
              <img
                key={i}
                onClick={handleImgClick}
                className="border cursor-pointer w-full"
                src={img}
                alt=""
                loading="lazy"
              />
            ))
          ) : (
            <>
              <Skeleton className="bg-gray-200 w-full h-[80px]" />
              <Skeleton className="bg-gray-200 w-full h-[80px]" />
              <Skeleton className="bg-gray-200 w-full h-[80px]" />
            </>
          )}
        </div>
        <div
          className={`lg:w-[55%] md:w-[55%] col-span-10 flex justify-center items-center rounded-md overflow-hidden`}
        >
          {inViewImg !== "" ? (
            <div className="fade-in" style={{ width: "80%" }}>
              <img src={inViewImg} alt="" className="w-full" />
            </div>
          ) : (
            <div className="animate-pulse bg-gray-200 w-4/5 h-[500px]"></div>
          )}
        </div>

        <div className="lg:w-[45%] md:w-[45%] lg:block md:block hidden">
          <div className="relative">
            {product.title ? (
              <h3 className="font-semibold text-lg">{product.title}</h3>
            ) : (
              <div className="animate-pulse">
                <Skeleton className="bg-gray-200 w-full h-[30px] absolute top-0 left-0" />
              </div>
            )}
          </div>

          <div className="rating flex text-[#FFAD33] justify-start items-center">
            {renderStars(rating)}
            <div className="relative">
              {product.ratingsQuantity ? (
                <span className="text-gray-300 ms-1 relative top-2 font-light text-sm">
                  ({product.ratingsQuantity})
                </span>
              ) : (
                <div className="animate-pulse">
                  <Skeleton className="bg-gray-200 w-full h-[30px] absolute top-0 left-0" />
                </div>
              )}
            </div>
          </div>
          {product.price ? (
            <p className="mt-2 text-md font-normal">{product?.price} EGP</p>
          ) : (
            <Skeleton className="mt-2 bg-gray-200 w-1/6 h-[20px]" />
          )}

          {product.description ? (
            <p className="mt-2 text-gray-500 text-sm">{product?.description}</p>
          ) : (
            <Skeleton className="mt-2 bg-gray-200 w-full h-[20px]" />
          )}
          <div className="actions my-3 flex justify-evenly items-center gap-1 w-full">
            <div className="quant flex items-center [30%]">
              <button
                onClick={handleIncrease}
                className="px-3 py-1 border border-[#7F7F7F] rounded-sm text-black hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white transition-all ease-linear"
              >
                +
              </button>
              <p className="mx-1">{quantity}</p>
              <button
                onClick={handleDecrease}
                className="px-3 py-1 border border-[#7F7F7F] rounded-sm text-black hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white transition-all ease-linear"
              >
                -
              </button>
            </div>
            <button className="p-2 bg-[#DB4444] rounded-md text-white w-[55%] hover:bg-[#f04b4b] transition-all ease-linear">
              Buy now
            </button>
            <i className="w-[10%] p-1 ms-2 text-3xl rounded-md border text-center justify-center flex cursor-pointer hover:text-[#DB4444]">
              <CiHeart />
            </i>
          </div>
          <div className="border my-5 rounded-md flex flex-col justify-center items-center">
            <div className="py-5 borer-b w-full flex justify-start items-center">
              <i className="text-5xl border-red-400">
                <TbTruckDelivery className="ms-12" />
              </i>
              <div className="det">
                <p className="ms-2 relative bottom-2 text-md font-semibold">Free Delivery</p>
                <p className="ms-2 relative text-sm font-light bottom-1 hover:border-b hover:border-black transition-all ease-linear cursor-pointer">
                  Free delivery for all orders over $140
                </p>
              </div>
            </div>
            <hr className="w-full" />
            <div className="py-5 borer-b w-full flex justify-start items-center">
              <i className="text-5xl border-red-400">
                <GiBackForth className="ms-12" />
              </i>
              <div className="det">
                <p className="ms-2 relative bottom-2 text-md font-semibold">Return Delivery</p>
                <p className="ms-2 relative text-sm font-light bottom-1 hover:border-b hover:border-black transition-all ease-linear cursor-pointer">
                  Free 30 Days Delivery Returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm flex px-8 lg:hidden md:hidden static justify-center w-full">
        <div className="w-full">
          {product.title ? (
            <h3 className={`font-semibold text-lg ${product.title ? "opacity-100" : "opacity-0"}`}>
              {product.title}
            </h3>
          ) : (
            <Skeleton className="bg-gray-200 w-full h-[30px]" />
          )}

          <div className="rating flex justify-start items-center text-[#FFAD33]">
            {renderStars(rating)}
            {product.ratingsQuantity ? (
              <span className="text-gray-300 font-light relative top-2 text-sm">
                ({product.ratingsQuantity})
              </span>
            ) : (
              <Skeleton className="bg-gray-200 mt-2 w-1/2 h-[30px]" />
            )}
          </div>
          {product.price ? (
            <p className="mt-2 text-md font-normal">{product.price} EGP</p>
          ) : (
            <Skeleton className="bg-gray-200 w-1/6 h-[20px] mt-2" />
          )}

          {product.description ? (
            <p className="mt-2 text-gray-500 text-sm">{product?.description}</p>
          ) : (
            <Skeleton className="mt-2 bg-gray-200 w-full h-[30px]" />
          )}

          <div className="actions my-3 flex justify-evenly items-center gap-1 w-full">
            <div className="quant flex items-center [30%]">
              <button
                onClick={handleIncrease}
                className="px-3 py-1 border border-[#7F7F7F] rounded-sm text-black hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white transition-all ease-linear"
              >
                +
              </button>
              <p className="mx-1">{quantity}</p>
              <button
                onClick={handleDecrease}
                className="px-3 py-1 border border-[#7F7F7F] rounded-sm text-black hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white transition-all ease-linear"
              >
                -
              </button>
            </div>
            <button className="p-2 bg-[#DB4444] rounded-md text-white w-[55%] hover:bg-[#f04b4b] transition-all ease-linear">
              Buy now
            </button>
            <i className="w-[10%] p-1 ms-2 text-3xl rounded-md border text-center justify-center flex cursor-pointer hover:text-[#DB4444]">
              <CiHeart />
            </i>
          </div>
          <div className="border my-5 rounded-md flex flex-col justify-center items-center">
            <div className="py-5 borer-b w-full flex justify-start items-center">
              <i className="text-5xl border-red-400">
                <TbTruckDelivery className="ms-12" />
              </i>
              <div className="det">
                <p className="ms-2 relative bottom-2 text-md font-semibold">Free Delivery</p>
                <p className="ms-2 relative text-sm font-light bottom-1 hover:border-b hover:border-black transition-all ease-linear cursor-pointer">
                  Free delivery for all orders over $140
                </p>
              </div>
            </div>
            <hr className="w-full" />
            <div className="py-5 borer-b w-full flex justify-start items-center">
              <i className="text-5xl border-red-400">
                <GiBackForth className="ms-12" />
              </i>
              <div className="det">
                <p className="ms-2 relative bottom-2 text-md font-semibold">Return Delivery</p>
                <p className="ms-2 relative text-sm font-light bottom-1 hover:border-b hover:border-black transition-all ease-linear cursor-pointer">
                  Free 30 Days Delivery Returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
