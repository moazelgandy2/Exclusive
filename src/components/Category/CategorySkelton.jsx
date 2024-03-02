import React from "react";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function CategorySkelton() {
  return (
    <>
      <div className="lg:col-span-3 md:col-span-6 col-span-12">
        <Card className="w-full px-5 border border-[#eeecec] relative overflow-hidden">
          <Skeleton className="w-full my-2 h-[250px]" />
          <Skeleton className="w-1/2 my-1 h-[20px]" />
          <Skeleton className="w-1/3 my-1 h-[10px]" />
          <Skeleton className="w-1/2 my-1 h-[10px]" />
          <div className="btn w-1/2 mx-auto my-3">
            <Skeleton className="w-full h-[30px]" />
          </div>
        </Card>
      </div>
    </>
  );
}

export default CategorySkelton;
