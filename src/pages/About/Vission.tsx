import { useTranslation } from "react-i18next";
import MainHeader from "../../components/MainHeader";
import PageHeader from "../../components/PageHeader";
import headerImg from "../../images/background/13.jpg";
import AboutMidContent from "../../components/AboutMidContent";
import Footer from "../../components/Footer";
import img from "../../images/about/vision.jpg";

function Vission() {
  const { t } = useTranslation();

  return (
    <>
      <MainHeader />
      <PageHeader image={headerImg} title={t("Vision")} />
      <AboutMidContent
        title={t("Our Vision")}
        text1={t("vision-info")}
        image={img}
      />
      <Footer />
    </>
  );
}

export default Vission;
