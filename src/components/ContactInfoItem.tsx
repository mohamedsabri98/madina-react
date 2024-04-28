import React from "react";

const ContactInfoItem = (props: any) => {
  return (
    <div className="d-flex">
      <i className={`${props.iconClass} title-bg fs-5 border-5 me-2`}></i>
      <h6 className={`${props.textClass} mt-1`}>{props.text}</h6>
    </div>
  );
};

export default ContactInfoItem;
