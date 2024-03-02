import React, { useContext, useEffect, useRef, useState } from "react";
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
import { CartContext } from "../Contexts/CartContext";
import ProductRow from "./ProductRow";

function Cart() {
  const { cart, getCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    setProducts(cart?.data);
  }, [cart]);

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(0);

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
            {products?.products?.length != 0 ? (
              products?.products?.map((product) => {
                return (
                  <ProductRow
                    id={product.product._id}
                    key={product.product._id}
                    title={product.product.title}
                    image={product.product.imageCover}
                    price={product.price}
                    count={product.count === 0 ? 1 : product.count}
                    total={Number(product.price) * Number(product.count == 0 ? 1 : product.count)}
                  />
                );
              })
            ) : (
              <TableRow className="min-h-[300px] flex justify-center items-center mx-auto w-[200%] ">
                <TableCell>Your cart appears to be empty at the moment.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="lg:w-1/2 md:w-1/2 rounded-sm lg:left-1/2 md:left-1/2 flex flex-col px-2 text-start gap-5 py-5 my-8 relative border">
          <h2 className="text-start font-bold">Cart Total</h2>
          <div className="col flex justify-between px-8">
            <p className="text-gray-500">Subtotal</p>
            <p className="text-gray-500">{products?.totalCartPrice} EGP</p>
          </div>
          <hr className="w-1/2 relative left-1/2 transform -translate-x-1/2" />
          <div className="col flex justify-between px-8">
            <p className="text-gray-500">Shipping</p>
            <p className="text-gray-500">Free</p>
          </div>
          <hr className="w-1/2 relative left-1/2 transform -translate-x-1/2" />
          <div className="col flex justify-between px-8">
            <p className="text-gray-500">Total</p>
            <p className="text-gray-500">{products?.totalCartPrice} EGP</p>
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
