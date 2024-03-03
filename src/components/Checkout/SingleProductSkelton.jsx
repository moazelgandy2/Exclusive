import React from "react";
import { Skeleton } from "../ui/skeleton";

function SingleProductSkelton() {
  return (
    <>
      <div className="flex items-center my-4">
        <Skeleton
          className="text-red-500 mr-2 w-[40px] h-[40px]"
          height={40}
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width={40}
        />
        <Skeleton className="w-4/6 h-[25px]" />
        <Skeleton className="w-1/6 h-[25px] ml-auto" />
      </div>
      <div className="flex items-center my-4">
        <Skeleton
          className="text-red-500 mr-2 w-[40px] h-[40px]"
          height={40}
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width={40}
        />
        <Skeleton className="w-4/6 h-[25px]" />
        <Skeleton className="w-1/6 h-[25px] ml-auto" />
      </div>
      <div className="flex items-center my-4">
        <Skeleton
          className="text-red-500 mr-2 w-[40px] h-[40px]"
          height={40}
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width={40}
        />
        <Skeleton className="w-4/6 h-[25px]" />
        <Skeleton className="w-1/6 h-[25px] ml-auto" />
      </div>
    </>
  );
}

export default SingleProductSkelton;
