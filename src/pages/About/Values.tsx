import AboutMidContent from "../../components/AboutMidContent";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import PageHeader from "../../components/PageHeader";
import img from "../../images/about/about.jpg";
import headerImg from "../../images/background/13.jpg";
import { useTranslation } from "react-i18next";

function Values() {
  const { t } = useTranslation();

  return (
    <>
      <MainHeader />
      <PageHeader image={headerImg} title={t("Values")} />
      <AboutMidContent
        title={t("Our Values")}
        text1={
          <>
            <p>{t("excellence")}</p>
            <p>{t("commitment")}</p>
            <p>{t("safety")}</p>
            <p>{t("professional_integrity")}</p>
            <p>{t("social_responsibility")}</p>
          </>
        }
        image={img}
      />

      <Footer />
    </>
  );
}

export default Values;
