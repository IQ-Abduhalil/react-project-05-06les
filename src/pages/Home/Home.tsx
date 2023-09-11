import "./Home.scss";
// import Greet from "../../components/Greet";
// import Status from "../../components/Status";
import Header from "../../components/header/Header";
import HomeHero from "../../components/homeHero/HomeHero";
import HomeRange from "../../components/homerange/HomeRange";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeHero />
      <HomeRange />

      <Footer />
      {/* <Status status="success" /> */}
      {/* <Greet name="John"   /> */}
    </div>
  );
};

export default Home;
