import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
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
import SponsersCarouselItem from "./SponsersCarouselItem";
import SponsersBgImg from "../images/background/8.jpg";
import { useTranslation } from "react-i18next";

function SponsersForHomePage() {
  const { t } = useTranslation();

  return (
    <>
      <div style={{ position: "relative", direction: "ltr" }}>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${SponsersBgImg})`,
            opacity: 0.25,
          }}
        />

        <div className="container">
          <div className="text-center m-5">
            <h2 className="main-title text-uppercase fs-1 fw-bolder">
              {t("Sponsors")}
            </h2>
          </div>
          <OwlCarousel
            className="owl-theme"
            loop
            margin={5}
            nav
            autoplay
            autoplayTimeout={2000}
            items={4}
          >
            <SponsersCarouselItem image={img1} />
            <SponsersCarouselItem image={img2} />
            <SponsersCarouselItem image={img3} />
            <SponsersCarouselItem image={img4} />
            <SponsersCarouselItem image={img5} />
            <SponsersCarouselItem image={img6} />
            <SponsersCarouselItem image={img7} />
            <SponsersCarouselItem image={arabia} />
            <SponsersCarouselItem image={concord} />
            <SponsersCarouselItem image={nat} />
            <SponsersCarouselItem image={sodic} />
            <SponsersCarouselItem image={sun} />
            <SponsersCarouselItem image={tatweer} />
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}

export default SponsersForHomePage;
