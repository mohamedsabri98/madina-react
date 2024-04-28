import React from "react";

function AboutMidContent(props: any) {
  return (
    <div className="container d-flex justify-content-between">
      <div className="mt-4">
        <span className="title-bg fs-3">{props.title}</span>
        <h2 className="mt-3 fw-bold">{props.subTitle}</h2>
        <h6 className="mt-3">{props.info}</h6>
        <div className="me-5 mt-5 fw-bold" style={{ color: "#777777" }}>
          <p>{props.text1}</p>
          <p>{props.text2}</p>
        </div>
      </div>
      <div className="m-5 rounded-5">
        <img
          src={props.image}
          className="rounded-5 mt-4"
          alt="header-img"
          style={{ height: "450px", width: "450px" }}
        />
      </div>
    </div>
  );
}

export default AboutMidContent;
