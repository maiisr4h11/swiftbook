import React from 'react';
import '../CSS/Modal.css'; // Add your custom styles here

function Modal({ show, handleClose, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
