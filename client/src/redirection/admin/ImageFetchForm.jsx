import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ImageFetchForm.css';

const ImageFetchForm = () => {
  const [images, setImages] = useState([]);
  const [editingImage, setEditingImage] = useState(null);
  const [newName, setNewName] = useState('');
  const [newJobPost, setNewJobPost] = useState('');

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/images');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleDelete = async (imageName) => {
    try {
      const response = await axios.post('http://localhost:5000/api/delete', { imageName });
      console.log('Image deleted:', response.data);
      fetchImages();
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };
  const enableEditing = (imageName) => {
    setEditingImage(imageName);
    const image = images.find((img) => img.imageName === imageName);
    setNewName(image.name);
    setNewJobPost(image.jobPost);
  };
  
  const handleUpdate = async (imageName) => {
    try {
      const response = await axios.post('http://localhost:5000/api/update', {
        imageName,
        newName,
        newJobPost,
      });
      console.log('Image updated:', response.data);
      setEditingImage(null);
      setNewName('');
      setNewJobPost('');
      fetchImages();
    } catch (error) {
      console.error('Error updating image:', error);
    }
  };


  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="image-list">
      {images.map((image) => (
        <div className="image-card" key={image._id}>
          <img src={image.imagePath} alt={image.imageName} />
          <div className="image-info">
            <h3 style={{ color: 'white' }}>Uploader Name: {image.name}</h3>
            <p style={{ color: 'white' }}>Uploader Job Post: {image.jobPost}</p>

            {editingImage === image.imageName ? (
              <div>
                <input
                  type="text"
                  placeholder="New Name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="New Job Post"
                  value={newJobPost}
                  onChange={(e) => setNewJobPost(e.target.value)}
                />
                <button
                  className="update-button"
                  onClick={() => handleUpdate(image.imageName)}
                >
                  Update
                </button>
              </div>
            ) : (
              <button
                className="edit-button"
                onClick={() => enableEditing(image.imageName)}
              >
                Edit
              </button>
            )}
          </div>
          <button className="delete-button" onClick={() => handleDelete(image.imageName)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageFetchForm;
