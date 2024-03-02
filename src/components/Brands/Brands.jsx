import React, { useEffect, useState } from "react";
import { Card, CardHeader } from "../ui/card";
import SectionHead from "../SectionHead/SectionHead";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";
import { Helmet } from "react-helmet";

function Brands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios.get("https://ecommerce.routemisr.com/api/v1/brands").then((res) => {
      setBrands(res.data.data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Brands</title>
        <meta name="description" content={`Brands page`} />
      </Helmet>
      <SectionHead title={"Brands"}>
        <section className="grid grid-cols-12 items-center px-12 gap-5">
          {loading ? (
            <>
              <div className="lg:col-span-4 md:col-span-6 col-span-12 my-5">
                <Skeleton className="w-full h-[160px] " />
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12 my-5">
                <Skeleton className="w-full h-[160px] " />
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12 my-5">
                <Skeleton className="w-full h-[160px] " />
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12 my-5">
                <Skeleton className="w-full h-[160px] " />
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12 my-5">
                <Skeleton className="w-full h-[160px] " />
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12 my-5">
                <Skeleton className="w-full h-[160px] " />
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12 my-5">
                <Skeleton className="w-full h-[160px] " />
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12 my-5">
                <Skeleton className="w-full h-[160px] " />
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12 my-5">
                <Skeleton className="w-full h-[160px] " />
              </div>
            </>
          ) : (
            brands?.map((brand) => {
              return (
                <div className="lg:col-span-4 md:col-span-6 col-span-12 my-5" key={brand._id}>
                  <Card className="w-full">
                    <CardHeader className="flex justify-center items-center">
                      <img className="w-1/2" src={brand.image} alt={(brand.name, "Brand image")} />
                    </CardHeader>
                  </Card>
                </div>
              );
            })
          )}
        </section>
      </SectionHead>
    </>
  );
}

export default Brands;
