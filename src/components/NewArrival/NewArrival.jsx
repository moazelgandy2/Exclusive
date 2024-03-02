import React from "react";
import SectionHead from "../SectionHead/SectionHead";
import Ring from "../../assets/images/ring.png";
import Womens from "../../assets/images/womens.png";
import PlayStation from "../../assets/images/playstation.png";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

function NewArrival() {
  return (
    <>
      <SectionHead title="New Arrival">
        <div className="my-5 px-5">
          <div className="grid grid-cols-12 gap-2">
            <div className="lg:col-span-7  col-span-12">
              <div className="bg-gradient-to-br lg:h-[610px] rounded-sm from-[#323232] to-black">
                <div className="img flex justify-center items-center w-full">
                  <img src={PlayStation} alt="" className="w-3/4" />
                </div>
                <div className="det relative bottom-5 left-5 text-start justify-start">
                  <h2 className="text-white relative">Electronics collection</h2>
                  <p className="text-white text-[10px] font-light ">
                    Discover unique vibes with our featured electronics collections.
                  </p>
                  <Link
                    to={"/category/electronics"}
                    className="flex items-center w-2/5 lg:w-1/6 text-white mt-2 border-b border-[#9b9999]"
                  >
                    Shop now <MdArrowOutward />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 gap-2 items-center m-0 p-0 col-span-12 grid rounded-sm grid-cols-12 overflow-hidden">
              <div className="womens col-span-12  rounded-sm relative bg-[#0D0D0D] lg:h-[300px] md:h-[350px] h-[200px]">
                <img src={Womens} alt="" className=" rounded-sm absolute bottom-0 left-0" />
                <div className="det absolute text-white bottom-8 left-4">
                  <h2>Women's collection</h2>
                  <p className="text-[12px] font-light">
                    Indulge in our curated women's collection for a distinct style statement
                  </p>
                  <Link
                    to={"/category/women'sClothing"}
                    className="flex items-center text-white w-2/5 lg:w-1/3 mt-2 border-b border-[#9b9999]"
                  >
                    Shop now <MdArrowOutward />
                  </Link>
                </div>
              </div>
              <div className="col-span-12 bg-[#131313] rounded-sm lg:h-[280px] self-end relative">
                <img src={Ring} alt="" />
                <div className="det absolute bottom-5 left-4">
                  <h2 className="text-white">Jewelry Collection</h2>
                  <p className="text-white text-[12px] font-light">Jewelry Collection</p>
                  <Link
                    to={"/category/jewelery"}
                    className="flex items-center text-white mt-2 border-b border-[#9b9999]"
                  >
                    Shop now <MdArrowOutward />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionHead>
    </>
  );
}

export default NewArrival;
