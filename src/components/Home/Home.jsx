import React from "react";
import Header from "../Header/Header";
import Featured from "../Featured/Featured";
import Categories from "@/Contexts/Categories/Categories";
import BestSelling from "../BestSelling/BestSelling";

function Home() {
  return (
    <>
      <Header />
      <Featured />
      <Categories />
      <BestSelling />
    </>
  );
}

export default Home;
