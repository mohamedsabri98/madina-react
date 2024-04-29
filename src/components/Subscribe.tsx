import { useTranslation } from "react-i18next";
import "../styles/Subscribe.css";
function Subscribe() {
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: "#3D3D3D" }}>
      <div className="container-fluid">
        <div className="d-flex media-subscribe">
          <div className="col-md-6">
            <div className="m-5">
              <div className="ms-5 mt-2 media-subscribe">
                <h3 className="main-title fw-bold">
                  {t("Need more information ?")}
                </h3>
                <p className="text-white">
                  {t(
                    "Please email us and our support staff will contact you back"
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 w-100" style={{ backgroundColor: "#E55039" }}>
            <div className="m-5">
              <div className="d-flex mt-3 subsribe-mail">
                <input
                  type="email"
                  name="email"
                  placeholder={t("Enter your email")}
                  className="form-control mb-3"
                />
                <button className="main-btn border-0 ms-3 mb-3">{t("Send Mail")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
