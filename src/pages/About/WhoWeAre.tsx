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
        text1={t("whoweare-text1")}
        text2={t("whoweare-text2")}
        image={img}
      />
      <Footer />
    </>
  );
}

export default WhoWeAre;
