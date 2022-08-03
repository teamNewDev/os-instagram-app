import React, { useState } from 'react';
import getPhotoUrl from 'get-photo-url';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../database';
import Skeleton from './LoadingScreen/Skeleton';
import Modal from './Modals/Modal';
import { SquarePlusIcon, DeleteIcon } from '../offlineIcons/Icons';

const Gallery = () => {
  const allPhotos = useLiveQuery(() => db.gallery.reverse().toArray(), []);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState('');

  const addPhoto = async () => {
    db.gallery.add({
      url: await getPhotoUrl('#addPhotoInput'),
    });
  };

  const removePhoto = (id) => db.gallery.delete(id);

  const clearAll = async () => await db.gallery.clear();

  let displayPhotoCondition;
  if (allPhotos) {
    displayPhotoCondition = (
      <section className='gallery'>
        {allPhotos?.length < 1 && <p>No images in the database</p>}
        {allPhotos?.map((photo) => (
          <div className='item' key={photo.id}>
            <img src={photo.url} className='item-image' alt='images' />
            <button
              className='delete-button'
              onClick={() => {
                setOpenModal(true);
                setId(photo.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </section>
    );
  } else if (!allPhotos) {
    displayPhotoCondition = <Skeleton type='custom' />;
    setTimeout(() => {
      return displayPhotoCondition;
    }, 4000);
  }

  return (
    <>
      <input type='file' name='photo' id='addPhotoInput' />
      <label htmlFor='addPhotoInput' onClick={addPhoto}>
        <div role='button' title='Click to add photo'>
          <SquarePlusIcon className='add-photo-button' />
        </div>
      </label>
      <label htmlFor='removePhoto' onClick={clearAll}>
        <div role='button' title='Delete All Photo'>
          <DeleteIcon className='removeAll' fill='#670000' />
        </div>
      </label>

      {displayPhotoCondition}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        remove={removePhoto}
        id={id}
      />
    </>
  );
};

export default Gallery;
