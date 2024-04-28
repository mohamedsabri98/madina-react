import React from "react";
import { Carousel } from "react-bootstrap";
import SliderItem from "./SliderItem";
import MainHeader from "./MainHeader";
import img0 from "../images/main-slider/image-4.jpg";
import img1 from "../images/main-slider/image-1.jpg";
import img2 from "../images/main-slider/image-2.jpg";
import img3 from "../images/main-slider/image-3.jpg";
import img5 from "../images/main-slider/image-5.jpg";
import img6 from "../images/main-slider/image-6.jpg";
import img7 from "../images/main-slider/image-7.jpg";
import { useTranslation } from "react-i18next";

function MainSlider() {
  const { t } = useTranslation();

  return (
    <>
      <div className="main-container">
        <MainHeader />
        <div className="slider-container">
          <Carousel interval={2500}>
            <Carousel.Item>
              <SliderItem
                styling={"main-color mb-5 pb-2 slider-text"}
                image={img0}
                text={t(
                  "Adheres to ES & international standards in manufacturing"
                )}
              />
            </Carousel.Item>
            <Carousel.Item>
              <SliderItem
                styling={"main-color mb-5 pb-2 slider-text"}
                image={img1}
                text={t("Ensure  sustainable Quality")}
              />
            </Carousel.Item>
            <Carousel.Item>
              <SliderItem
                styling={"mb-5 pb-2 slider-text"}
                image={img2}
                text={t("We build the future")}
              />
            </Carousel.Item>
            <Carousel.Item>
              <SliderItem
              styling={"main-color mb-5 pb-2 slider-text"}
                image={img3}
                text={t("Contributing to Egypt vision & growth 2030")}
              />
            </Carousel.Item>
            <Carousel.Item>
              <SliderItem
              styling={"mb-5 pb-2 slider-text"}
                image={img5}
                text={t("Provide safety and work environment.")}
              />
            </Carousel.Item>
            <Carousel.Item>
              <SliderItem
              styling={"mb-5 pb-2 slider-text"}
                image={img6}
                text={t("Meet the needs wide variety of sectors & projects")}
              />
            </Carousel.Item>
            <Carousel.Item>
              <SliderItem
              styling={"main-color mb-5 pb-2 slider-text"}
                image={img7}
                text={t("Contributing to Egypt vision & growth 2030")}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default MainSlider;
