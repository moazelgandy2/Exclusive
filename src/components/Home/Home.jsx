import React from "react";
import Header from "../Header/Header";
import Featured from "../Featured/Featured";
import Categories from "@/components/Categories/Categories";
import BestSelling from "../BestSelling/BestSelling";
import NewArrival from "../NewArrival/NewArrival";
import Services from "../Services/Services";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Discover luxury and exclusivity at Exclusive, your premier destination for upscale fashion and lifestyle products. Explore curated collections of designer apparel, accessories, and more, tailored to elevate your style. Shop now for an unparalleled shopping experience."
        />
      </Helmet>
      <Header />
      <Featured />
      <Categories />
      <BestSelling />
      <NewArrival />
      <Services />
    </>
  );
}

export default Home;
