import { useTranslation } from "react-i18next";
import MainHeader from "../../components/MainHeader";
import PageHeader from "../../components/PageHeader";
import headerImg from "../../images/background/13.jpg";
import img from "../../images/about/about.jpg";
import Footer from "../../components/Footer";
import AboutMidContent from "../../components/AboutMidContent";

function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <>
      <MainHeader />
      <PageHeader image={headerImg} title={t("Who We Are")} />
      <AboutMidContent
        title={t("Who We Are")}
        subTitle={t("Steel-based Future")}
        info={t("About Almadina Steel (40 Years of Experience)")}
        text1={
          t("Almadina Steel, for over a quarter-century of sustainable growth on Steel Rebar trade and distribution, has accomplished tremendous success and powerful presence in the steel market. as a certified distributor and importer for the Largest steel factories in Egypt, Turkey, Ukraine.")
        }
        text2={
          t("Since the steel industry plays a significant role in developing nations, the strategic turnaround of Almadina Group in this industry, came in parallel with the future-oriented trend of state-supported construction sector. At Almadina Steel, we are driven by our initiative and passion for excellence to play an influential role in the steel industry, to contribute to the growth and success of Egypt economy and to support the growing demand in the domestic and international markets.")
        }
        image={img}
      />
      <Footer />
    </>
  );
}

export default WhoWeAre;
