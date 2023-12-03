import React from "react";

const ImageCard = ({imageUrl, decription, contentText, title}) => {
  return (
    <div className="imgDiv">
      <h3>{title}</h3>
      <img src={imageUrl} />
      <p>{decription}</p>
      <p>{contentText}</p>
    </div>
  );
};

export default ImageCard;
