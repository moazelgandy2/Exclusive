import React from "react";
import Header from "../Header/Header";
import Featured from "../Featured/Featured";
import Categories from "@/Contexts/Categories/Categories";
import BestSelling from "../BestSelling/BestSelling";
import NewArrival from "../NewArrival/NewArrival";

function Home() {
  return (
    <>
      <Header />
      <Featured />
      <Categories />
      <BestSelling />
      <NewArrival />
    </>
  );
}

export default Home;
