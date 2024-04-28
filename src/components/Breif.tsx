import { useTranslation } from "react-i18next";
import "../styles/Breif.css";
function Breif() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="text-center mt-5">
        <h2 className="breif-text">{t("breif-text")}</h2>
      </div>
      <div className="text-center mt-5">
        <a href="" className="main-btn">
          {t("More")}
        </a>
      </div>
    </div>
  );
}

export default Breif;
