import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./MasonryLayout.module.css";
import Masonry from "react-masonry-css";
import MasonryBox from './MasonryBox/MasonryBox';

const MasonryLayout = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  const ImageGallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
      async function fetchImages() {
        try {
          const response = await axios.get('http://localhost:5000/api/images');
          setImages(response.data);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      }
      fetchImages();
    }, []);

    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles["my-masonry-grid"]}
        columnClassName={styles["my-masonry-grid_column"]}
      >
        {images.map(image => (
          <MasonryBox 
            key={image.id} 
            wallSrc={image.imagePath} 
            userProf={image.data} 
            userName={image.name} 
            userJob={image.jobPost}
            myImageName={image.imageName} 
           Links={image.imagePath}
          />
        ))}
      </Masonry>
    );
  }

  return <ImageGallery />;
}

export default MasonryLayout;
