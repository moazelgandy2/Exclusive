import React from "react";

function SingleProduct({ title, price, image }) {
  return (
    <div className="flex items-center my-4">
      <img
        alt="LCD Monitor"
        className="text-red-500 mr-2"
        height={40}
        style={{
          aspectRatio: "40/40",
          objectFit: "cover",
        }}
        width={40}
        src={image}
      />
      <span className="font-medium">{title}</span>
      <span className="ml-auto">EGP {price}</span>
    </div>
  );
}

export default SingleProduct;
