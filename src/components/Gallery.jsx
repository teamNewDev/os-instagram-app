import React, { useState } from 'react';
import getPhotoUrl from 'get-photo-url';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../database';
import Skeleton from './LoadingScreen/Skeleton';
import Modal from './Modals/Modal';

const Gallery = () => {
  const allPhotos = useLiveQuery(() => db.gallery.toArray(), []);
  const [openModal, setOpenModal] = useState(false);

  const addPhoto = async () => {
    db.gallery.add({
      url: await getPhotoUrl('#addPhotoInput'),
    });
  };

  const removePhoto = (id) => db.gallery.delete(id);

  return (
    <>
      <input type='file' name='photo' id='addPhotoInput' />
      <label htmlFor='addPhotoInput' onClick={addPhoto}>
        <div role='button' title='Click to add photo'>
          <i className='add-photo-button fas fa-plus-square'></i>
        </div>
      </label>

      {!allPhotos ? (
        <Skeleton type='custom' />
      ) : (
        <section className='gallery'>
          {allPhotos?.map((photo) => (
            <div className='item' key={photo.id}>
              <img src={photo.url} className='item-image' alt='images' />
              <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                remove={() => removePhoto(photo.id)}
              />
              <button
                className='delete-button'
                onClick={() => setOpenModal(true)}
              >
                Delete
              </button>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default Gallery;
