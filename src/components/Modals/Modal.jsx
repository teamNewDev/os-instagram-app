import React from 'react';
import './modal.css';

const Modal = ({ open, onClose, remove }) => {
  if (!open) return null;
  return (
    <div className='modalBackgound'>
      <div className='modal-container'>
        <div className='closebtn'>
          <button onClick={() => onClose(false)}>X</button>
        </div>
        <div className='title'>
          <h1>Are You Sure You Want To Delete?</h1>
        </div>
        <div className='body'>
          <p>Once you delete, it can't be retrieved🚫🚫</p>
        </div>
        <div className='footer'>
          <button onClick={() => onClose(false)} id='cancelBtn'>
            NO
          </button>
          <button onClick={() => remove()}>YES</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
