import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { toast } from "sonner";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    const token = localStorage.getItem("userToken");
    if (cart != []) {
      const { data } = await axios
        .get("https://ecommerce.routemisr.com/api/v1/cart", {
          headers: { token: token },
        })
        .catch((err) => {})
        .then();
      data ? setCart(data) : "";
      return data;
    }
  };

  const addToCart = async ({ token, prodId }) => {
    const promise = axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId: prodId },
        { headers: { token: token } }
      )
      .then((res) => {
        getCart();
      })
      .catch((error) => {});

    toast.promise(promise, {
      loading: "Adding to cart...",
      success: "Added to cart",
      error: "Error adding to cart",
    });
    return promise;
  };

  const decreaseCount = async ({ token, prodId, count }) => {
    const promise = axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${prodId}`,
        {
          count: count,
        },
        { headers: { token: token } }
      )
      .then((res) => {
        getCart();
      })
      .catch((error) => {});

    toast.promise(promise, {
      loading: "Updating cart...",
      success: "Cart updated",
      error: "Error updating to cart",
    });
    return promise;
  };

  const removeFromCart = async ({ token, prodId }) => {
    const promise = axios
      .delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${prodId}`,

        { headers: { token: token } }
      )
      .then((res) => {
        getCart();
      })
      .catch((error) => {});

    toast.promise(promise, {
      loading: "Removing from cart...",
      success: "Removing from cart",
      error: "Error removing from cart",
    });
    return promise;
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, decreaseCount, removeFromCart, getCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
