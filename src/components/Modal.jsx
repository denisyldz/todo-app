import React from 'react';

function Modal({ id, title, body, onClose }) {
  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {body}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
