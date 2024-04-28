import { useTranslation } from "react-i18next";
import "../styles/Subscribe.css"
function Subscribe() {
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: "#3D3D3D" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12 m-5">
                <div className="ms-5 mt-2">
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
          </div>
          <div className="col-md-6" style={{ backgroundColor: "#E55039" }}>
            <div className="row">
              <div className="col-md-12 m-5">
                <div className="d-flex mt-3">
                  <input
                    type="email"
                    name="email"
                    placeholder={t("Enter your email")}
                    className="form-control me-4"
                  />
                  <button className="main-btn border-0">
                    {t("Send Mail")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
