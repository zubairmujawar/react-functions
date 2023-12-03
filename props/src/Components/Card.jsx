import React, { useEffect, useState } from "react";

// const photoUrl = "https://api.slingacademy.com/v1/sample-data/photos" // Api
// "https://picsum.photos/seed/picsum/200/300",

const Card = () => {
  const [photos, setphotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.slingacademy.com/v1/sample-data/photos"
        );
        const data = await response.json(); //Error: TypeError: photos.map is not a function, photos is not an array use if-else

        if (Array.isArray(data.photos)) {
          //Data received from the API is not an array it is object
          setphotos(data.photos);

        } else {
          console.error("Data received from the API is not an array:", data);
        }
      } catch (error) {
        console.log("Datat error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="main-container">
      <div className="cardDiv">
        {
        photos.map((photo) => (
          <div className="imgDiv">
            <img src={photo.url} />
            <p>{photo.title}</p>
          </div>
        ))
        }
      </div>
    </div>
    // <div className="main-container">
    //   <h1>Photo Gallery</h1>
    //   <ul className="container">
    //     {photos.map((photo) => (
    //       <li key={photo.id} className="imgDiv">
    //         <img src={photo.url} alt={photo.title} />
    //         <p>{photo.title}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Card;
