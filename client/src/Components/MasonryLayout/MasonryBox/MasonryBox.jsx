import React, { useState } from 'react';
import axios from 'axios';
import styles from './MasonryBox.module.css';
import { PropTypes } from 'prop-types';
import Download from './Download.png';
import Delete from './Delete.png';
import Edit from './Edit.png';
import './mybutton.css';

const MasonryBox = ({ wallSrc, userName, userJob, myImageName , Links }) => {
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(userName);
  const [editedJob, setEditedJob] = useState(userJob);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditedName(userName);
    setEditedJob(userJob);
  };

  const handleSaveEdit = () => {
    axios
      .post('http://localhost:5000/api/update', {
        imageName: myImageName,
        editedName,
         editedJob,
      })
      .then((response) => {
        alert('Updated Successfully');
        console.log(imageName);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles['my-masonry']}>
      <img src={wallSrc} style={{ width: '100%' }} alt="" />
      <div className={`${styles['my-masnry-description']} flex`}>
        <div className={`${styles['my-masnry-user-box']} flex align-items-center`}>
          <div className={styles['my-masnry-user-prof']}>
            {editing ? (
              <>
                <div className='button2'>
                  <input
                    className='myinput'
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    placeholder="Image Creator Name"
                  />
                  <input
                    type="text"
                    className='myinput'
                    value={editedJob}
                    onChange={(e) => setEditedJob(e.target.value)}
                    placeholder="Image Creator Job"
                  />
                  <div className="mybutton2">
                    <button className="mybutton" onClick={handleSaveEdit}>
                      Save
                    </button>
                    <button className="mybutton" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <img
                src={Edit}
                alt=""
                onClick={handleEditClick}
                className={styles['edit']}
              />
            )}
          </div>

          <div className={`${styles['my-masnry-user-prof-desc']} flex flex-column`}>
            <h1>{editedName}</h1>
            <h3>{editedJob}</h3>
          </div>
        </div>
        <img src={Delete} alt="" className={styles['download']} />
        <a href={Links}>
          <img src={Download} alt="" className={styles['download']} />
        </a>
      </div>
    </div>
  );
};

MasonryBox.propTypes = {
  wallSrc: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userJob: PropTypes.string.isRequired,
  Links: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
};

export default MasonryBox;
