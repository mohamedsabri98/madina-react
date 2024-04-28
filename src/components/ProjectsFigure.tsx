import "../styles/Projects.css";

function ProjectsFigure(props: any) {
  return (
    <div className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-center align-items-center mt-5">
      <figure>
        <a href={props.url}>
          <img className="img-figure" src={props.image} alt="img-figure" />
        </a>
      </figure>
    </div>
  );
}

export default ProjectsFigure;
