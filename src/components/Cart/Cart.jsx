import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Cart() {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(0);
  const handleQuantityInCrease = () => {
    setQuantity((q) => q + 1);
  };
  const handleQuantityDeCrease = () => {
    quantity != 0 ? setQuantity((q) => q - 1) : "";
  };
  const navigateToHome = () => {
    return navigate("/");
  };
  return (
    <>
      <div className="lg:px-12 md:px-12 px-5 my-12">
        <Table>
          <TableCaption>
            <button
              onClick={navigateToHome}
              className="p-2 text-black lg:w-1/5 md:w-1/4 w-1/2 border rounded-sm"
            >
              Return home
            </button>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-3/6">Product</TableHead>
              <TableHead className="w-1/6">Price</TableHead>
              <TableHead className="w-1/6">Quantity</TableHead>
              <TableHead className="w-1/6 text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium w-3/6">
                <div className="det gap-2 flex items-center w-full">
                  <img
                    className="w-1/4 rounded-md"
                    src="https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg"
                    alt=""
                  />
                  <p>LCD Monitor</p>
                </div>
              </TableCell>
              <TableCell className="w-1/6">
                <span>$160</span>
              </TableCell>
              <TableCell className="w-1/6">
                <div className="lg:w-1/2 md:w-1/2 w-full gap-1 flex justify-evenly items-center text-xl text-center rounded-sm">
                  <button
                    className="p-1 bg-[#DB4444] text-white rounded-sm"
                    onClick={handleQuantityDeCrease}
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    className="p-1 bg-[#DB4444] text-white rounded-sm"
                    onClick={handleQuantityInCrease}
                  >
                    +
                  </button>
                </div>
              </TableCell>
              <TableCell className="text-right w-1/6">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="lg:w-1/2 md:w-1/2 rounded-sm lg:left-1/2 md:left-1/2 flex flex-col px-2 text-start gap-5 py-5 my-8 relative border">
          <h2 className="text-start font-bold">Cart Total</h2>
          <div className="col flex justify-between px-8">
            <p className="text-gray-500">Subtotal</p>
            <p className="text-gray-500">$175</p>
          </div>
          <hr className="w-1/2 relative left-1/2 transform -translate-x-1/2" />
          <div className="col flex justify-between px-8">
            <p className="text-gray-500">Shipping</p>
            <p className="text-gray-500">Free</p>
          </div>
          <hr className="w-1/2 relative left-1/2 transform -translate-x-1/2" />
          <div className="col flex justify-between px-8">
            <p className="text-gray-500">Total</p>
            <p className="text-gray-500">$176</p>
          </div>
          <button className="p-2 bg-[#DB4444] hover:bg-[#be3c3c] text-white w-3/4 md:w-1/2 lg:w-1/2 rounded-sm relative left-1/2 transform -translate-x-1/2">
            Procees to checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
