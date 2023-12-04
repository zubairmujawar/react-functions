import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
//Api for blogs "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30"
const AllPhotos = () => {
  const [photos, setphotos] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://api.slingacademy.com/v1/sample-data/photos"
        );
        const data = await response.json();
        if (Array.isArray(data.photos)) {
          setphotos(data.photos);
        } else {
          console.log(error, "error from api");
        }
      } catch (error) {
        console.log(error, "error from api");
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="main-container">
      <h1>Photos Gallary</h1>
      <div className="cardDiv">
        {loading ? (
          <img src="https://media.tenor.com/JBgYqrobdxsAAAAi/loading.gif" />
        ) : (
          photos.map((image) => (
            <ImageCard
              key={image.id}
              imageUrl={image.url}
              title={image.title}
              decription={image.description}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AllPhotos;
