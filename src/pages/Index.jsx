import React from "react";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import HomeOneMeal from "../components/HomeOneMeal";
import WeekCook from "../components/WeekCook";
import MealTotal from "../components/MealTotal";
import Footer from "../components/Footer";

function Index() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <HomeBanner></HomeBanner>
        <HomeOneMeal></HomeOneMeal>
        <WeekCook></WeekCook>
        <MealTotal></MealTotal>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default Index;
