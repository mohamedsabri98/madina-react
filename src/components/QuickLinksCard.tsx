import React from "react";
import { Card } from "react-bootstrap";
function QuickLinksCard(props: any) {
  return (
    <Card style={{ width: "18rem", height: "15rem" }} className="mt-5 mb-5">
      <a href={props.link}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
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
        </Card.Body>
      </a>
    </Card>
  );
}

export default QuickLinksCard;
