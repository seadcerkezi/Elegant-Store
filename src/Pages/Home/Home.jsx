import React from "react";
import Banner from "../../Components/Banner/Banner";
import CardScroll from "../../Components/CardScroll/CardScroll";
import Deals from "../../Components/Deals/Deals";
import Footer from "../../Components/Footer/Footer";
import SecondBanner from "../../Components/SecondBanner/SecondBanner";
import SignUp from "../../Components/SignUp/SignUp";
import Slick from "../../Components/Slick/Slick";
import "./home.css";
import AnimatedPage from "../../Components/AnimatedPage";

const Home = () => {
  return (
    <AnimatedPage>
      <Banner />
      <Slick title="Gear Up" arrivals="Gear Up" />
      <SecondBanner />
      <Slick title="New Arrivals" arrivals="New Arrivals" />
      <Deals />
      <SignUp />
      <Footer />
    </AnimatedPage>
  );
};

export default Home;
