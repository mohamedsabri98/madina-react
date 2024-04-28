import MainSlider from "../components/MainSlider";
import Breif from "../components/Breif";
import QuickLinks from "../components/QuickLinks";
import ProductsForHomePage from "../components/ProductsForHomePage";
import AboutForHomePage from "../components/AboutForHomePage";
import SponsersForHomePage from "../components/SponsersForHomePage";
import Subscribe from "../components/Subscribe";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <MainSlider />
      <Breif />
      <QuickLinks />
      <ProductsForHomePage />
      <AboutForHomePage />
      <SponsersForHomePage />
      <Subscribe />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
