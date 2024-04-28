import React from 'react';

const MapEmbed = (props:any) => {
  return (
    <div className="map-outer me-3">
      <h4 className="m-2 main-color text-center">{props.title}</h4>
      <iframe
        title={props.title}
        src={props.src}
        style={{
          border: '5px',
          borderRadius: '15px',
          width: '265px',
          height: '300px',
        }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
