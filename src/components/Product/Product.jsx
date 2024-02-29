import React, { useState } from "react";
import { useParams } from "react-router";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { GiBackForth } from "react-icons/gi";
import { Skeleton } from "@/components/ui/skeleton";

function Product() {
  const { id } = useParams();
  const [inViewImg, setInViewImg] = useState(
    "https://ecommerce.routemisr.com/Route-Academy-products/1680399913757-cover.jpeg"
  );
  const [quantity, setQuantity] = useState(1);
  const handleImgClick = (e) => {
    setInViewImg(e.target.currentSrc);
  };
  const handleIncrease = () => {
    setQuantity((q) => q + 1);
  };
  const handleDecrease = () => {
    quantity != 0 ? setQuantity((q) => q - 1) : "";
  };
  return (
    <>
      <div className="lg:flex md:flex grid grid-cols-12 lg:w-3/4 md:w-3/4 w-full mx-auto lg:gap-2 md:gap-2 gap-8 px-8 my-12">
        <div className="lg:w-[10%] md:w-[10%] col-span-2 items-center flex flex-col gap-2 justify-center ">
          <img
            onClick={handleImgClick}
            className="border  cursor-pointer w-full"
            src="https://ecommerce.routemisr.com/Route-Academy-products/1680399913850-1.jpeg"
            alt=""
          />
          <img
            className="border  cursor-pointer w-full"
            onClick={handleImgClick}
            src="https://ecommerce.routemisr.com/Route-Academy-products/1680399913851-4.jpeg"
            alt=""
          />
          <img
            className="border  cursor-pointer w-full"
            onClick={handleImgClick}
            src="https://ecommerce.routemisr.com/Route-Academy-products/1680399913850-2.jpeg"
            alt=""
          />
        </div>
        <div className="lg:w-[55%] md:w-[55%] col-span-10 justify-center items-center  rounded-md overflow-hidden">
          <img src={inViewImg} alt="" className="w-3/4" />
        </div>
        <div className="lg:w-[45%] md:w-[45%] lg:block md:block hidden">
          <h3 className="font-semibold text-lg">Havic HV G-92 Gamepad</h3>
          <div className="rating">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-gray-300 font-light text-sm">(65)</span>
          </div>
          <p className="mt-2 text-md font-normal">$165.00</p>
          <p className="mt-2 text-gray-500 text-sm">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy
            bubble free install & mess free removal Pressure sensitive.
          </p>
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
          <h3 className="font-semibold text-lg">Havic HV G-92 Gamepad</h3>
          <div className="rating">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-gray-300 font-light text-sm">(65)</span>
          </div>
          <p className="mt-2 text-md font-normal">$165.00</p>
          <p className="mt-2 text-gray-500 text-sm">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy
            bubble free install & mess free removal Pressure sensitive.
          </p>
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
