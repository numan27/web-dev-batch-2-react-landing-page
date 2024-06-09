import React from "react";
import CardsHome from "./components/CardsHome";
import AnimationSection from "./components/AnimationSection";
import BestTools from "./components/BestTools";
import AnimationSection2 from "./components/AnimationSection2";
import { StatsSection } from "./components/StatsSection";
import ReviewsSection from "./components/ReviewsSection";
import GradientSection from "./components/GradientSection";
// import AppLayout from '../../components/AppLayout'

const Home = () => {
  return (
    <div>
      {/* <AppLayout> */}
      <CardsHome />
      <AnimationSection />
      <BestTools />
      <AnimationSection2 />
      <StatsSection />
      <ReviewsSection />
      <GradientSection />
      {/* </AppLayout> */}
    </div>
  );
};

export default Home;
