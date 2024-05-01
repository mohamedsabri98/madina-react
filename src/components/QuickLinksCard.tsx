import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function QuickLinksCard(props: any) {
  return (
    <Card style={{ width: "18rem", height: "15rem" }} className="mt-5 mb-5">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Link to={props.url} target="_blank" style={{ textDecoration: "none" }}>
          <div className="d-flex justify-content-start">
            <img
              src={props.icon}
              alt="brand-foundation-icon"
              style={{ width: "60px", height: "60px", paddingBottom: "5px" }}
            />
            <Card.Title className="mt-3 fs-6 fw-bold main-title">
              {props.title}
            </Card.Title>
          </div>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default QuickLinksCard;
