import React, { useContext, useEffect, useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import { CartContext } from "../Contexts/CartContext";
import { TokenContext } from "../Contexts/Token";
import { MdDelete } from "react-icons/md";

function ProductRow({ title, price, count, id, image, total }) {
  const { addToCart, decreaseCount, removeFromCart } = useContext(CartContext);
  const { token } = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    await removeFromCart({ token: token, prodId: id });
    setIsLoading(false);
  };

  const handleIncrease = async () => {
    console.log(id);
    setIsLoading(true);
    await addToCart({ token: token, prodId: id });
    setIsLoading(false);
  };

  const handleDecrease = async () => {
    setIsLoading(true);
    await decreaseCount({ token: token, prodId: id, count: count - 1 });
    setIsLoading(false);
  };

  return (
    <>
      <TableRow>
        <TableCell className="font-medium w-3/6">
          <div className="det relative gap-2 flex items-center w-full">
            <img className="w-1/6 rounded-md" src={image} alt="" />
            <p className="lg:text-[16px] text-[12px]">{title}</p>
            <button
              onClick={handleDelete}
              className="bg-white rounded-sm lg:left-2 lg:absolute lg:top-1  md:left-2 md:absolute md:top-1  text-[#DB4444] lg:text-3xl md:text-2xl text-xl"
            >
              <MdDelete />
            </button>
          </div>
        </TableCell>
        <TableCell className="w-1/6">
          <span>{price}</span>
        </TableCell>
        <TableCell className="w-1/6">
          <div className="lg:w-1/2 md:w-1/2 w-full gap-1 flex justify-evenly items-center text-xl text-center rounded-sm">
            <button
              disabled={count == 1 || isLoading}
              onClick={handleDecrease}
              className="p-1 bg-[#DB4444] text-white rounded-sm"
            >
              -
            </button>
            <p>{count}</p>
            <button
              disabled={isLoading}
              onClick={handleIncrease}
              className="p-1 bg-[#DB4444] text-white rounded-sm"
            >
              +
            </button>
          </div>
        </TableCell>
        <TableCell className="text-right w-1/6">{total}</TableCell>
      </TableRow>
    </>
  );
}

export default ProductRow;
