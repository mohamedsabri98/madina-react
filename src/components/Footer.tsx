import { useTranslation } from "react-i18next";
import footerBG from "../images/background/6.jpg";
import "../styles/Footer.css";
import ContactInfoItem from "./ContactInfoItem";
import MapEmbed from "./MapEmbed";
import SocicalLinks from "./SocicalLinks";
function Footer() {
  const { t } = useTranslation();

  return (
    <footer style={{ backgroundImage: `url(${footerBG})` }}>
      <div className="container d-flex">
        <div className="pt-5">
          <span className="title-bg fs-3">{t("Contact Us")}</span>
          <h3 className="text-white mt-3 mb-3 ms-1">{t("Get in touch")}</h3>
          <p className="text-white mt-4 mb-4">
            {t(
              "Al Madina Group has achieved many successes and a strong presence in the steel industry market."
            )}
          </p>
          <ContactInfoItem
            iconClass="bi bi-telephone-fill"
            textClass="text-white"
            text="01122222385 – 025253716"
          />
          <ContactInfoItem
            iconClass="bi bi-envelope"
            text="info@almadina-steel.com"
            textClass="text-white"
          />
          <ContactInfoItem
            iconClass="bi bi-geo-alt-fill"
            textClass="text-white"
            text={t(
              "H.Q:48 Street 105, Maadi Al Khabiri Al Gharbeyah, Al Maadi Cairo"
            )}
          />
          <ContactInfoItem
            iconClass="bi bi-geo-alt-fill"
            textClass="text-white"
            text="Plants 10th of Ramdan,third Industrial Zone - A2 Piece 1,2"
          />
        </div>
        <div className="ms-3 mt-4 mb-4">
          <div className="d-flex">
            <MapEmbed
              title={t("HeadQuarter")}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4640121979933!2d31.248381110358913!3d29.966092122175677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584792ec835fcf%3A0xfa530ec18aa0ed87!2z2YXYrNmF2YjYudipINin2YTZhdiv2YrZhtipINmE2YTYtdmE2Kg!5e0!3m2!1sen!2seg!4v1700916696452!5m2!1sen!2seg"
            />
            <MapEmbed
              title={t("Factory")}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.134044994368!2d31.792652775563283!3d30.29024537480082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457fd5b14e6c2b5%3A0x51dabd38a61fd905!2z2YXYtdmG2Lkg2KfZhNmF2K_ZitmG2Kkg2YTZhNi12YTYqA!5e0!3m2!1sen!2seg!4v1710077798761!5m2!1sen!2seg"
            />
          </div>
        </div>
      </div>
      <SocicalLinks />
      <div className="d-flex container p-3">
        <h6 className="text-white mt-1">
          {t("Copyrights 2024. All Rights are Reserved by")}
        </h6>
        <a
          href=""
          className="fw-bold ms-2 text-uppercase text-decoration-none main-color"
        >
          {t("Almadina Steel")}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
