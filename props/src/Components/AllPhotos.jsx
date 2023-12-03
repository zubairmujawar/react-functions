import React, { useEffect, useState } from "react";

const Photos = () => {
  const [photos, setphotos] = useState([]);

  useEffect(() => {
    const fetchdata = () => async () => {
      try {
        const response = await fetch(
          "https://api.slingacademy.com/v1/sample-data/photos"
        );
        const data = await response.json();

        if (Array.isArray(data.photos)) {
          setphotos(data.photos);
        } else {
          console.error("Data received from the API is not an array:", data);
        }
      } catch (error) {
        console.log(data, "error from api");
      }
    };
    fetchdata();
  }, []);
  return (
    <div className="main-container">
      <h1>Photos Gallery</h1>
      {photos.map((photo) => (
        <div className="imgDiv" key={photo.id}>
          <h3>{photo.title}</h3>
          <img src={photo.url} alt={photo.title} />
        </div>
      ))}
    </div>
  );  
};

export default Photos;
