import "../styles/Breif.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Breif() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="text-center mt-5">
        <h2 className="breif-text">{t("breif-text")}</h2>
      </div>
      <div className="text-center mt-5">
        <Link to="/who-we-are" className="main-btn">
          {t("About us")}
        </Link>
      </div>
    </div>
  );
}

export default Breif;
