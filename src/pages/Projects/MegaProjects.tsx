import React from "react";
import MainHeader from "../../components/MainHeader";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import img from "../../images/background/13a.jpg";
import ProjectsImg1 from "../../images/projects/3.jpg";
import ProjectsImg2 from "../../images/projects/4.jpg";
import ProjectsImg3 from "../../images/projects/5.jpg";
import ProjectsImg4 from "../../images/projects/6.jpg";
import ProjectsImg5 from "../../images/projects/7.jpg";
import ProjectsImg6 from "../../images/projects/8.jpg";
import ProjectsImg7 from "../../images/projects/9.jpg";
import ProjectsFigure from "../../components/ProjectsFigure";
import { useTranslation } from "react-i18next";

function MegaProjects() {
  const { t } = useTranslation();

  return (
    <>
      <MainHeader />
      <PageHeader image={img} title={t("Mega Projects")} />
      <div className="container">
        <div className="mt-5" style={{ color: "#77797B" }}>
          <h5>
            {t(
              "Our Steel Rebar approved and supplied in Iconic Construction sites in Egypt :"
            )}
          </h5>
          <h5 className="mt-5">
            {t(
              "New Capital- Badr City- Oubour City- 6th of October City- Ain Sokhna- 15 May City - El Sadat City- Down Town Delta."
            )}
          </h5>
        </div>
        <div className="d-flex justify-content-center align-content-center flex-wrap mb-4">
          <div className="row clearfix">
            <ProjectsFigure url={ProjectsImg1} image={ProjectsImg1} />
            <ProjectsFigure url={ProjectsImg2} image={ProjectsImg2} />
            <ProjectsFigure url={ProjectsImg3} image={ProjectsImg3} />
            <ProjectsFigure url={ProjectsImg4} image={ProjectsImg4} />
            <ProjectsFigure url={ProjectsImg5} image={ProjectsImg5} />
            <ProjectsFigure url={ProjectsImg6} image={ProjectsImg6} />
            <ProjectsFigure url={ProjectsImg7} image={ProjectsImg7} />
            <ProjectsFigure url={ProjectsImg1} image={ProjectsImg1} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MegaProjects;
