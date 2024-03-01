import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white flex justify-center items-center py-12">
        <div className="grid grid-cols-12 w-2/3 mx-auto gap-5">
          <div className="lg:col-span-4 md:col-span-6 col-span-12 flex flex-col lg:items-start items-center justify-center">
            <h2>Exclusive</h2>
            <ul className="flex flex-col gap-2 mt-2 px-1 justify-start lg:text-start text-center lg:items-start items-center">
              <li className="text-[12px] font-light">
                <p>Subscribe</p>
              </li>
              <li className="text-[12px] font-light">
                <p>Get 10% off your first order</p>
              </li>
              <li className="text-[12px] font-light relative">
                <label htmlFor="sub" className=" opacity-0 absolute top-0">
                  Subscribe input
                </label>
                <input
                  id="sub"
                  className="bg-black border-white me-1 border rounded-sm w-[65%] mt-1 text-white p-1 outline-none"
                />
                <button className="bg-white text-black rounded-sm p-1 font-normal w-[30%]">
                  Subscribe
                </button>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12 flex flex-col lg:items-start items-center justify-center">
            <h2>Support</h2>
            <ul className="flex flex-col gap-2 mt-2 px-1 justify-start lg:text-start text-center lg:items-start items-center">
              <li className="text-[12px] font-light">
                <p>
                  111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
                </p>
              </li>
              <li className="text-[12px] font-light">
                <p>exclusive@gmail.com</p>
              </li>
              <li className="text-[12px] font-light">
                <p>+88015-88888-9999</p>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12 flex flex-col lg:items-start items-center justify-center">
            <h2>Quick Links</h2>
            <ul className="flex flex-col gap-2 mt-2 lg:px-8 items-center justify-start text-center">
              <li className="text-[12px] font-light">
                <i className="text-lg cursor-pointer">
                  <FaGithub />
                </i>
              </li>
              <li>
                <i className="text-lg cursor-pointer">
                  <FaLinkedinIn />
                </i>
              </li>
              <li>
                <i className="text-lg cursor-pointer">
                  <FaFacebook />
                </i>
              </li>
              <li>
                <i className="text-lg cursor-pointer">
                  <FaTwitter />
                </i>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
