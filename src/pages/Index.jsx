import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import HomeMealTotal from "../components/HomeMealTotal";
import HomeOneMeal from "../components/HomeOneMeal";
import HomeWeekCook from "../components/HomeWeekCook";

function Index() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <HomeBanner></HomeBanner>
        <HomeOneMeal></HomeOneMeal>
        <HomeWeekCook></HomeWeekCook>
        <HomeMealTotal></HomeMealTotal>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default Index;
