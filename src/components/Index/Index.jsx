import React, { useEffect, useState } from "react";
import "./Index.css";
import Categories from "../Categories/Categories";
import Swiper from "../Swiper/Swiper";
import Payment from "../Payment/Payment";
// import { getDolarPrice } from "../../services/DolarAPI";
import DolarBox from "../DolarBox/DolarBox";

let Index = () => {
  //   let prices = [{}];

  //   useEffect(() => {
  //     getDolarPrice("blue").then((price) => this.price.push(price));
  //     /*  getDolarPrice('oficial').then((price) => prices.push([...prices, price])); */
  //     console.log(prices[0]);
  //   }, []);

  return (
    <>
      <Swiper />
      <DolarBox />
      <div className="mt-5 container">
        <Categories />
      </div>
    </>
  );
};

export default Index;
