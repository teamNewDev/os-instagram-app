import React from 'react';
import './skeleton.css';

const Skeleton = ({ type }) => {
  const Counter = 6;
  const Profile = () => (
    <div className='profileContainer'>
      <div className='profileImage'></div>
    </div>
  );

  const UserSkeleton = () => (
    <div className='userContainer'>
      <div className='userName'></div>
      <div className='aboutUser'></div>
    </div>
  );

  const GallerySkeleton = () => <div className='galleryContainer'></div>;

  const CustomLoading = () => (
    <div className='custom'>
      <div className='balls'>
        <div className='ball ball1'></div>
        <div className='ball ball2'></div>
        <div className='ball ball3'></div>
      </div>
      <span className='customText'>Loading...</span>
    </div>
  );

  if (type === 'profile') return <Profile />;
  if (type === 'user') return <UserSkeleton />;
  if (type === 'photo') return Array(Counter).fill(<GallerySkeleton />);
  if (type === 'custom') return <CustomLoading />;
};

export default Skeleton;
