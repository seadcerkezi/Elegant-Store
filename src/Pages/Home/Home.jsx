import React from "react";
import Banner from "../../Components/Banner/Banner";
import CardScroll from "../../Components/CardScroll/CardScroll";
import Deals from "../../Components/Deals/Deals";
import Footer from "../../Components/Footer/Footer";
import SecondBanner from "../../Components/SecondBanner/SecondBanner";
import SignUp from "../../Components/SignUp/SignUp";
import "./home.css";

const Home = () => {
  return (
    <>
      <Banner />
      <CardScroll title="Gear Up" />
      <SecondBanner />
      <CardScroll title="New Arrivals" />
      <Deals />
      <SignUp />
      <Footer />
    </>
  );
};

export default Home;
