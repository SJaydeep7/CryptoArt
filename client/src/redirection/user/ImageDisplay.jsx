import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ImageFetchForm.css'; // Your custom CSS file

const ImageFetchForm = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/images'); 
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImageDownload = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="image-list">
      {images.map((image) => (
        <div className="image-card" key={image._id}>
          <img src={image.imagePath} alt={image.imageName} />
          <div className="image-info">
            <h3>{image.name}</h3>
            <p>Job Post: {image.jobPost}</p>
            <button onClick={() => handleImageDownload(image.imagePath)}>
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageFetchForm;
