import { useTranslation } from "react-i18next";
import aboutImg from "../images/about/aboutHome.jpg";

function AboutForHomePage() {
  const { t } = useTranslation();

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <div className="m-4">
          <img
            src={aboutImg}
            alt="aboutImg"
            style={{ height: "550px", width: "600px", borderRadius: "30px" }}
          />
        </div>
        <div className="m-4">
          <span className="title-bg fs-2">{t("About Us")}</span>
          <h3 className="mt-4 fw-bold">{t("40 years of experience")}</h3>
          <p className="mt-4">{t("about-home-text-1")}</p>
          <p className="mt-5">{t("about-home-text-2")}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutForHomePage;
