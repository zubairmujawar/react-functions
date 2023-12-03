import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
const AllPhotos = () => {
  const [photos, setphotos] = useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        let response = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30")
        const data = await response.json()
        if(Array.isArray(data.blogs)){
          setphotos(data.blogs)
        }else{
          console.log(error, "error from api")
        }
        
      } catch (error) {
        console.log(error, "error from api")
      }
    }
    fetchData()
  },[])
  return (
    <div className='main-container'>
        <h1>Photos Gallary</h1>
      <div className='cardDiv'>
        {
          photos.map((blog)=>(
            <ImageCard key={blog.id} imageUrl={blog.photo_url} title={blog.title} decription={blog.description} contentText={blog.content_text} />
          ))
        }
        
      </div>
    </div>
  )
}

export default AllPhotos
