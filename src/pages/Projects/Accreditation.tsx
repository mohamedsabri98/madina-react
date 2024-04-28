import MainHeader from "../../components/MainHeader";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import CertificationFigure from "../../components/CertificationFigure";
import img from "../../images/background/13a.jpg";
import proImg from "../../images/products/service-9.jpg";
import certificatImg1 from "../../images/quality/certifications/5.png";
import certificatImg2 from "../../images/quality/certifications/6.png";
import certificatImg3 from "../../images/quality/certifications/7.png";
import certificatImg4 from "../../images/quality/certifications/8.png";
import certificatImg5 from "../../images/quality/certifications/9.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Accreditation() {
  const { t } = useTranslation();

  return (
    <>
      <MainHeader />
      <PageHeader image={img} title={t("Accreditation & Approvals")} />
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="mt-4 mb-5">
            <span className=" title-bg">{t('Product accreditation')}</span>
          </div>
          <div className="mt-4">
            <Link to="/certifications" className="btn btn-outline-danger">
              {t('Consulting engineering approvals')}
            </Link>
          </div>
        </div>
        <div className="m-5" style={{ color: "#77797B" }}>
          <h5>
            {t('accreditation-text')}
            
          </h5>
          <hr />
          <img
            src={proImg}
            alt="product-img"
            className="rounded-5"
            style={{ width: "100%", height: "400px" }}
          />
          <div className="d-flex flex-wrap mt-5 mb-5">
            <CertificationFigure url={certificatImg1} image={certificatImg1} />
            <CertificationFigure url={certificatImg2} image={certificatImg2} />
            <CertificationFigure url={certificatImg3} image={certificatImg3} />
            <CertificationFigure url={certificatImg4} image={certificatImg4} />
            <CertificationFigure url={certificatImg5} image={certificatImg5} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Accreditation;
