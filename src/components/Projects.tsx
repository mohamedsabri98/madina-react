import ProjectsFigure from "./ProjectsFigure";
import projectsIcon from "../images/icons/svg/projects-logo.svg";
import ProjectsImg1 from "../images/projects/3.jpg";
import ProjectsImg2 from "../images/projects/4.jpg";
import ProjectsImg3 from "../images/projects/5.jpg";
import ProjectsImg4 from "../images/projects/6.jpg";
import ProjectsImg5 from "../images/projects/7.jpg";
import ProjectsImg6 from "../images/projects/8.jpg";
import ProjectsImg7 from "../images/projects/9.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Projects() {
  const { t } = useTranslation();

  return (
    <div className="container mt-5">
      <div className="d-flex">
        <img
          src={projectsIcon}
          alt="projects-icon"
          style={{ width: "60px", height: "60px" }}
        />
        <h1 className="main-title fw-bold mt-2">{t("Projects")}</h1>
      </div>
      <div className="d-flex justify-content-center align-content-center flex-wrap ">
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
        <Link to="/mega-projects" className="main-btn m-5">
          {t("More")}
        </Link>
      </div>
    </div>
  );
}

export default Projects;
