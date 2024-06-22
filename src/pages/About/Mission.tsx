import React from "react";
import AboutMidContent from "../../components/AboutMidContent";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import PageHeader from "../../components/PageHeader";
import headerImg from "../../images/background/13.jpg";
import img from "../../images/about/mission.jpg";
import { useTranslation } from "react-i18next";

function Mission() {  
  const { t } = useTranslation();
  const missionTextPoints = t("mission_text_points", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <MainHeader />
      <PageHeader image={headerImg} title={t("Mission")} />
      <AboutMidContent
        title={t("Our Mission")}
        info={t("About Almadina Steel (40 Years of Experience)")}
        text1={
          <>
            <p>{t("mission_text_intro")}</p>
            {missionTextPoints.map((point, index) => (
              <p key={index}>{point}</p>
            ))}
            <p>{t("mission_text_conclusion")}</p>
            <p>{t("mission_text_last")}</p>
          </>
        }
        image={img}
      />
      <Footer />
    </>
  );
}

export default Mission;
