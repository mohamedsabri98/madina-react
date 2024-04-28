import React from "react";

function SponsersCarouselItem(props: any) {
  return (
    <div className="item m-5">
      <img src={props.image} alt="carousel-image" />
    </div>
  );
}

export default SponsersCarouselItem;
