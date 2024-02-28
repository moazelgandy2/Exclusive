import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";

function Services() {
  return (
    <>
      <div className=" my-28 px-12 grid grid-cols-12 text-center items-center">
        <div className="col-span-4 flex flex-col gap-4 justify-center items-center">
          <TbTruckDelivery className="border-[5px] bg-black text-white border-[#C1C1C1] rounded-full p-2 text-center w-[80px] h-[80px]" />
          <div className="det">
            <h2 className="font-bold">FREE AND FAST DELIVERY</h2>
            <p className="text-[12px]">Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-4 justify-center items-center">
          <MdOutlineSupportAgent className="border-[5px] bg-black text-white border-[#C1C1C1] rounded-full p-2 text-center w-[80px] h-[80px]" />
          <div className="det">
            <h2 className="font-bold">24/7 CUSTOMER SERVICE</h2>
            <p className="text-[12px]">Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-4 justify-center items-center">
          <AiFillSafetyCertificate className="border-[5px] bg-black text-white border-[#C1C1C1] rounded-full p-2 text-center w-[80px] h-[80px]" />
          <div className="det">
            <h2 className="font-bold">MONEY BACK GUARANTEE</h2>
            <p className="text-[12px]">We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
