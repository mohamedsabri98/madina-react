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
        text1={t(
          "Almadina Steel pursues the sustainable growth of iron and steel manufacturing from a long-term perspective."
        )}
        text2={t(
          "Becoming a steel and mining pioneer was never our only end, rather we aspire to establish a true steel entity, significantly influences the local and regional markets."
        )}
        image={img}
      />
      <Footer />
    </>
  );
}

export default Vission;
