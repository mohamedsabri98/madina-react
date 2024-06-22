import { Container } from "react-bootstrap";
import MainHeader from "../../components/MainHeader";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import img from "../../images/background/13a.jpg";
import ProjectsFigure from "../../components/ProjectsFigure";
import figureImg1 from "../../images/quality/certifications/news-1.jpg";
import figureImg2 from "../../images/quality/certifications/news-2.jpg";
import figureImg3 from "../../images/quality/certifications/news-3.jpg";
import figureImg4 from "../../images/quality/certifications/news-4.jpg";
import figureImg5 from "../../images/quality/certifications/news-5.jpg";
import figureImg6 from "../../images/quality/certifications/news-6.jpg";
import figureImg7 from "../../images/quality/certifications/news-7.jpg";
import figureImg8 from "../../images/quality/certifications/news-8.jpg";
import figureImg9 from "../../images/quality/certifications/news-9.jpg";
import certificatImg1 from "../../images/quality/certifications/1.jpg";
import certificatImg2 from "../../images/quality/certifications/2.jpg";
import certificatImg3 from "../../images/quality/certifications/3.jpg";
import certificatImg4 from "../../images/quality/certifications/4.jpg";
import certificatImg5 from "../../images/quality/certifications/1.png";
import certificatImg6 from "../../images/quality/certifications/2.png";
import certificatImg7 from "../../images/quality/certifications/3.png";
import certificatImg8 from "../../images/quality/certifications/4.png";
import certificatImg9 from "../../images/quality/certifications/5.png";
import certificatImg10 from "../../images/quality/certifications/6.png";
import certificatImg11 from "../../images/quality/certifications/7.png";
import certificatImg12 from "../../images/quality/certifications/8.png";
import certificatImg13 from "../../images/quality/certifications/9.png";
import CertificationFigure from "../../components/CertificationFigure";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Certifications() {
  const { t } = useTranslation();

  return (
    <>
      <MainHeader />
      <PageHeader image={img} title={t("Certifications")} />
      <Container>
        <div className="d-flex justify-content-between media-cert">
          <div className=" mt-4 mb-5">
            <span className="title-bg media-cert-title">
              {t("Consulting engineering approvals")}
            </span>
          </div>
          <div className="mt-4">
            <Link
              to="/accreditation"
              className="btn btn-outline-danger media-cert-btn"
            >
              {t("Product accreditation")}
            </Link>
          </div>
        </div>
        <p className="fs-6 mb-4">{t("accreditation-info")}</p>
        <div className="d-flex flex-wrap">
          <CertificationFigure url={certificatImg1} image={certificatImg1} />
          <CertificationFigure url={certificatImg2} image={certificatImg2} />
          <CertificationFigure url={certificatImg3} image={certificatImg3} />
          <CertificationFigure url={certificatImg4} image={certificatImg4} />
          <CertificationFigure url={certificatImg5} image={certificatImg5} />
          <CertificationFigure url={certificatImg6} image={certificatImg6} />
          <CertificationFigure url={certificatImg7} image={certificatImg7} />
          <CertificationFigure url={certificatImg8} image={certificatImg8} />
          <CertificationFigure url={certificatImg9} image={certificatImg9} />
          <CertificationFigure url={certificatImg10} image={certificatImg10} />
          <CertificationFigure url={certificatImg11} image={certificatImg11} />
          <CertificationFigure url={certificatImg12} image={certificatImg12} />
          <CertificationFigure url={certificatImg13} image={certificatImg13} />
          <ProjectsFigure url={figureImg1} image={figureImg1} />
          <ProjectsFigure url={figureImg2} image={figureImg2} />
          <ProjectsFigure url={figureImg3} image={figureImg3} />
          <ProjectsFigure url={figureImg4} image={figureImg4} />
          <ProjectsFigure url={figureImg5} image={figureImg5} />
          <ProjectsFigure url={figureImg6} image={figureImg6} />
          <ProjectsFigure url={figureImg7} image={figureImg7} />
          <ProjectsFigure url={figureImg8} image={figureImg8} />
          <ProjectsFigure url={figureImg9} image={figureImg9} />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Certifications;
