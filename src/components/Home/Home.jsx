import React from "react";
import Header from "../Header/Header";
import Featured from "../Featured/Featured";
import Categories from "@/Contexts/Categories/Categories";
import BestSelling from "../BestSelling/BestSelling";
import NewArrival from "../NewArrival/NewArrival";
import Services from "../Services/Services";

function Home() {
  return (
    <>
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
