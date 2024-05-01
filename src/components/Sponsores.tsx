import React from "react";
import MainHeader from "./MainHeader";
import PageHeader from "./PageHeader";
import { useTranslation } from "react-i18next";
import img from "../images/background/13a.jpg";
import Footer from "./Footer";
import img1 from "../images/sponsers/1.png";
import img2 from "../images/sponsers/2.png";
import img3 from "../images/sponsers/3.png";
import img4 from "../images/sponsers/4.png";
import img5 from "../images/sponsers/5.png";
import img6 from "../images/sponsers/6.png";
import img7 from "../images/sponsers/7.png";
import arabia from "../images/sponsers/arabia.png";
import concord from "../images/sponsers/concord.png";
import nat from "../images/sponsers/nat.png";
import sodic from "../images/sponsers/sodic.png";
import sun from "../images/sponsers/sun.png";
import tatweer from "../images/sponsers/tatweer.png";
import SponsoresItem from "./SponsoresItem";
function Sponsores() {
  const { t } = useTranslation();

  return (
    <>
      <MainHeader />
      <PageHeader title={t("Sponsores")} image={img} />
      <div className="container mb-5">
        <div className="mt-4 mb-4">
          <span className=" title-bg">{t("Success Stories")}</span>
        </div>
        <h6 className="container fs-5">
          {t('sponsores-text')}
          
        </h6>
        <div className="d-flex flex-wrap justify-content-between">
          <SponsoresItem image={img1} url={img1} />
          <SponsoresItem image={img2} url={img2} />
          <SponsoresItem image={img3} url={img3} />
          <SponsoresItem image={img4} url={img4} />
          <SponsoresItem image={img5} url={img5} />
          <SponsoresItem image={img6} url={img6} />
          <SponsoresItem image={img7} url={img7} />
          <SponsoresItem image={arabia} url={arabia} />
          <SponsoresItem image={concord} url={concord} />
          <SponsoresItem image={nat} url={nat} />
          <SponsoresItem image={sodic} url={sodic} />
          <SponsoresItem image={sun} url={sun} />
          <SponsoresItem image={tatweer} url={tatweer} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sponsores;
