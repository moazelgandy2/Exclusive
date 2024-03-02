import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "sonner";

export const WishListContext = createContext();

export default function WishListContextProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  const getWishList = async () => {
    const token = localStorage.getItem("userToken");
    const { data } = await axios
      .get("https://ecommerce.routemisr.com/api/v1/wishlist", {
        headers: { token: token },
      })
      .catch((err) => {});
    setWishList(data.data);
    return data.data;
  };

  const addToWishList = async ({ token, prodId }) => {
    const promise = axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        { productId: prodId },
        { headers: { token: token } }
      )
      .then((res) => {})
      .catch((error) => {});

    toast.promise(promise, {
      loading: "Adding to wishlist...",
      success: "Added to wishlist",
      error: "Error adding to wishlist",
    });
    return promise;
  };

  const removeFromWishList = ({ token, prodId }) => {
    const promise = axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${prodId}`, {
      headers: { token: token },
    });
    toast.promise(promise, {
      loading: "Removing from wishlist...",
      success: "Removed from wishlist",
      error: "Error removing from wishlist",
    });
    return promise;
  };

  return (
    <WishListContext.Provider
      value={{ wishList, setWishList, addToWishList, removeFromWishList, getWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
}
