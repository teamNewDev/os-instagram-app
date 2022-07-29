import React, { useState } from 'react';
import getPhotoUrl from 'get-photo-url';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../database';
import Skeleton from './LoadingScreen/Skeleton';

const Bio = () => {
  const formDetails = useLiveQuery(() => db.bio.get('info'));
  const profilePhoto = useLiveQuery(() => db.bio.get('profilePhoto'));
  const [editFormVisible, setEditFormVisible] = useState(false);

  const updateUserDetails = async (e) => {
    e.preventDefault();
    const objData = {
      name: document.querySelector('#myName').value,
      about: document.querySelector('#aboutMe').value,
    };

    await db.bio.put(objData, 'info');
    setEditFormVisible(false);
  };

  const updateProfilePhoto = async () => {
    const newProfilePhoto = await getPhotoUrl('#profilePhotoInput');
    await db.bio.put(newProfilePhoto, 'profilePhoto');
  };

  const editForm = (
    <form className='edit-bio-form' onSubmit={(e) => updateUserDetails(e)}>
      <input
        type='text'
        id='myName'
        name='nameOfUser'
        defaultValue={formDetails?.name}
        placeholder='Your name'
        required
      />
      <input
        type='text'
        id='aboutMe'
        name='aboutUser'
        defaultValue={formDetails?.about}
        placeholder='About you'
        required
      />
      <br />
      <button
        type='button'
        className='cancel-button'
        onClick={() => setEditFormVisible(false)}
      >
        Cancel
      </button>
      <button type='submit'>Save</button>
    </form>
  );

  const editButton = (
    <button onClick={() => setEditFormVisible(true)}>Edit</button>
  );

  let displayProfileCondition;
  if (!profilePhoto) {
    displayProfileCondition = <p>Set your profile photo</p> || (
      <Skeleton type='profile' />
    );
    setTimeout(() => {
      return displayProfileCondition;
    }, 4000);
    // displayProfileCondition = <Skeleton type='profile' />;
  } else if (profilePhoto) {
    displayProfileCondition = <img src={profilePhoto} alt='' />;
  }

  return (
    <section className='bio'>
      <input
        type='file'
        accept='images/*'
        name='photo'
        id='profilePhotoInput'
      />
      <label htmlFor='profilePhotoInput' onClick={updateProfilePhoto}>
        <div
          className='profile-photo'
          role='button'
          title='Click to edit profile'
        >
          {displayProfileCondition}
        </div>
      </label>

      <div className='profile-info'>
        {!formDetails ? (
          <Skeleton type='user' />
        ) : (
          <>
            <p className='name'>{formDetails?.name}</p>
            <p className='about'>{formDetails?.about}</p>
          </>
        )}

        {editFormVisible ? editForm : editButton}
      </div>
    </section>
  );
};

export default Bio;
