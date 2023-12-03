import React, { useEffect, useState } from "react";

// const photoUrl = "https://api.slingacademy.com/v1/sample-data/photos" // Api

const Card = () => {
  const [photos, setphotos] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30"
        );
        const data = await response.json(); //Error: TypeError: photos.map is not a function, photos is not an array use if-else

        if (Array.isArray(data.blogs)) {
          //Data received from the API is not an array, it is object
          setphotos(data.blogs);
        } else {
          console.error("Data received from the API is not an array:", data);
        }
      } catch (error) {
        console.log("Data error", error);
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="main-container">
      <h1>Daiy Blogs</h1>
      <div className="cardDiv">
        {loading ? (
          <img src="https://i.gifer.com/origin/b1/b128497bc8d6fcfefb93b88b260561a7_w200.gif" />
        ) : (
          photos.map((blog) => (
            <div className="imgDiv" key={blog.id}>
              <h3 className="title">{blog.title}</h3>
              <img src={blog.photo_url} />
              <p>{blog.description}</p>
              <p>{blog.content_text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Card;
