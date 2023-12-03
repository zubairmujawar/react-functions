import React from "react";

const ImageCard = ({imageUrl, decription, title}) => {
  const handleDownload = () =>{
    window.open(imageUrl, "_blank")
  }
  return (
    <div className="imgDiv">
      <h3>{title}</h3>
      <img src={imageUrl} onClick={handleDownload}/>
      <p>{decription}</p>
      <button className="download-btn" onClick={handleDownload}>download</button>
    </div>
  );
};

export default ImageCard;
