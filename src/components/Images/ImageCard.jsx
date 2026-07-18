import React from 'react';
import "./Grid.css";
import { Heart, Download } from 'lucide-react';
import { Eye } from 'lucide-react';
import { saveAs } from "file-saver";

const ImageCard = ({ img, onToggleFavorite, isFavorite }) => {

  // Download Feature
  const handleDownload = async () => {
    try {
      const response = await fetch(img.largeImageURL);
      const blob = await response.blob();

      saveAs(blob, `pixabay-image-${img.id}.jpg`);
    } catch (error) {
      console.log("Download failed:", error);
    }
  };

  return (
    <div className="image-card">
      <img src={img.webformatURL} alt={img.tags} />

      <div className="like-download-button">

        <Heart color="white"
          color="white"
          fill={isFavorite(img.id) ? "red" : "none"}
          onClick={() => onToggleFavorite(img)}
        />

        <Download color="white" onClick={handleDownload} />
      </div>

      <div className='name'>
        <span className='first-letter'>{img.user.charAt(0).toUpperCase()}</span>
        <span className='whole-name'>{img.user}</span>
      </div>

      <div className='bottom-right'>
        <span className='likes'>
          <Heart fill='red' style={{ border: 'none' }} />
          {img.likes}
        </span>

        <span className='views'>
          <Eye fill='grey' />
          {img.views}
        </span>
      </div>
    </div>
  );
};

export default ImageCard;