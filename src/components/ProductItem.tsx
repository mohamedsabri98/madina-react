import React from "react";

function ProductItem(props: any) {
  return (
    <div className="text-center">
      <img
        src={props.image}
        alt="product-img"
        style={{ width: "340 px", height: "340px", borderRadius: "30px" }}
      />
      <div className="m-3">
        <h2 className="main-title fw-bold mb-3">{props.title}</h2>
        <p className="fs-6">{props.text}</p>
      </div>
    </div>
  );
}

export default ProductItem;
