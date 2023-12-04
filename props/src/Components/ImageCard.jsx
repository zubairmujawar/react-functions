import React from "react";

const ImageCard = ({ imageUrl, decription, title }) => {
  const handleView = () => {
    window.open(imageUrl, "_blank");
  };
  const handleDownload = () => {
    const downloadLink = document.createElement("a"); //The handleDownload function creates a temporary <a> element.
    downloadLink.href = imageUrl;   //It sets the href attribute of the anchor to the image URL.
    downloadLink.download = "Image";

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  return (
    <div className="imgDiv">
      <h3>{title}</h3>
      <img src={imageUrl} onClick={handleView} />
      <p>{decription}</p>
      <button className="download-btn" onClick={handleDownload}>
        download
      </button>
    </div>
  );
};

export default ImageCard;
