import React from 'react'
import ImageCard from '../Images/ImageCard'
import "./Grid.css"

const Imagegrid = ({images,onToggleFavorite,isFavorite}) => {
  // let toggleFavorite = () =>console.log("hi")
  // let isFavoriteCheck = () =>console.log("Hello")
  return (
     <>
       <div className="Image-grid">
        {images.map((image,index)=>
       <ImageCard
        key={`${image.id}-${index}`}
        img = {image}
        onToggleFavorite={onToggleFavorite}
        isFavorite= {isFavorite}
        />)}
       </div>
     </>
  )
}

export default Imagegrid