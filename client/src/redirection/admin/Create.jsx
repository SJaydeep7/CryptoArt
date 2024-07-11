import React, { useState } from 'react';
import './create.css';
import axios from 'axios';

function Create() {
    const [name, setName] = useState('');
    const [jobPost, setJobPost] = useState('');
    const [image, setImage] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleJobPostChange = (event) => {
        setJobPost(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('jobPost', jobPost);
            formData.append('image', image);

            await axios.post('http://localhost:5000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setName('');
            setJobPost('');
            setImage(null);

            alert('Upload successful!');
        } catch (error) {
            console.error('Error uploading data:', error);
        }
    };

    return (
        <>
            <div className="create">
                <div className="signup2">
                    <div className="overlap-wrapper">
                        <div className="overlap">

                            <div className="overlap-group-2">
                                <div className="ellipse" />
                                <div className="ellipse-2" />
                                <div className="frame-wrapper">
                                    <div className="frame-2">
                                        <div className="frame-3">
                                            <div className="upper-section">
                                                <div className="login-text">
                                                    <div className="text-wrapper-2">Upload Image</div>
                                                    <p className="p">Add new ART to your Gallery !</p>
                                                </div>
                                                <div className="credentials">
                                                    <div className="div-wrapper">
                                                        <label htmlFor="imageFile" className="text-wrapper-9">Choose Image:   </label>
                                                        <input type="file" id="imageFile" name="imageFile" className="text-wrapper-9" onChange={handleImageChange} />
                                                    </div>
                                                    <div className="div-wrapper">
                                                        <input type="text" placeholder="Enter Image Creator Name" id="creatorName" className="text-wrapper-9" value={name} onChange={handleNameChange} />
                                                    </div>
                                                    <div className="password-rem">
                                                        <div className="div-wrapper">
                                                            <input type="text" id="creatorJob" name="creatorJob" className="text-wrapper-9" placeholder="Enter Image Creator Job" value={jobPost} onChange={handleJobPostChange} />
                                                        </div>
                                                    </div>
                                                    <div className="login-bt-fp">
                                                        <div className="login">
                                                            <button type="button" className="text-wrapper-11" onClick={handleUpload}>Upload</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>











        </>
    );
}

export default Create;
