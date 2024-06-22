import React from "react";
import MainHeader from "../components/MainHeader";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import img from "../images/background/13.jpg";
import { useTranslation } from "react-i18next";
import ContactInfoItem from "../components/ContactInfoItem";

function FindUs() {
  const { t } = useTranslation();

  return (
    <>
      <MainHeader />
      <PageHeader image={img} title={t("Find Us")} />
      <div className="container">
        <div className="mt-4 mb-4">
          <span className=" title-bg">{t("Find Us")}</span>
        </div>
        <h2 className=" fw-bold mb-4">{t("Get In Touch")}</h2>
        <ContactInfoItem
          iconClass="bi bi-telephone-fill"
          text="01122222385 – 025253716 - 0225270105 - 0225270107 - 0225270108"
        />
        <ContactInfoItem
          iconClass="bi bi-clock"
          text="working hours       09:00 am - 05:00 pm"
        />
        <ContactInfoItem
          iconClass="bi bi-envelope"
          text="info@almadina-steel.com"
        />
        <ContactInfoItem
          iconClass="bi bi-geo-alt-fill"
          text={t(
            "H.Q:48 Street 105, Maadi Al Khabiri Al Gharbeyah, Al Maadi Cairo"
          )}
        />
        <ContactInfoItem
          iconClass="bi bi-geo-alt-fill"
          text={t("Plants 10th of Ramdan,third Industrial Zone - A2 Piece 1,2")}
        />
        <div className="d-flex m-2">
          <h3 className="main-color fw-bold mt-1">{t("Follow on")}</h3>
          <div className="ms-3 ">
            <a href="https://www.facebook.com/MDS2030/">
              <i className="bi bi-facebook ms-4 fs-3 "></i>
            </a>
            <a href="https://www.instagram.com/almadinasteel/">
              <i className="bi bi-instagram ms-4 fs-4 "></i>
            </a>
            <a href="https://www.linkedin.com/company/almadinasteel">
              <i className="bi bi-linkedin ms-4 fs-4 "></i>
            </a>
          </div>
        </div>
        <div className="ms-3 mt-4 mb-4">
          <div className="d-flex justify-content-between">
            <div className="map-outer me-3">
              <h4 className="m-2 main-color text-center">{t("HeadQuarter")}</h4>
              <iframe
                title="headquarter"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4640121979933!2d31.248381110358913!3d29.966092122175677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584792ec835fcf%3A0xfa530ec18aa0ed87!2z2YXYrNmF2YjYudipINin2YTZhdiv2YrZhtipINmE2YTYtdmE2Kg!5e0!3m2!1sen!2seg!4v1700916696452!5m2!1sen!2seg"
                style={{
                  border: "5px",
                  borderRadius: "15px",
                  width: "550px",
                  height: "300px",
                }}
                loading="lazy"
              ></iframe>
            </div>
            <div className="map-outer me-3">
              <h4 className="m-2 main-color text-center">{t("Factory")}</h4>
              <iframe
                title="factory"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.134044994368!2d31.792652775563283!3d30.29024537480082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457fd5b14e6c2b5%3A0x51dabd38a61fd905!2z2YXYtdmG2Lkg2KfZhNmF2K_ZitmG2Kkg2YTZhNi12YTYqA!5e0!3m2!1sen!2seg!4v1710077798761!5m2!1sen!2seg"
                style={{
                  border: "5px",
                  borderRadius: "15px",
                  width: "550px",
                  height: "300px",
                }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FindUs;
