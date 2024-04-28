import "../styles/Certifications.css";

function CertificationFigure(props: any) {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center mt-5">
      <figure>
        <a href={props.url}>
          <img className="image-figure mt-3 mb-5" src={props.image} alt="img-figure" />
        </a>
      </figure>
    </div>
  );
}

export default CertificationFigure;
