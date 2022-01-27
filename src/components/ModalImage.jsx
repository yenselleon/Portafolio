import React from 'react';
import '../styles/modalStyle.css'

const Modal = ({children, active}) => {
  return (
    
    <>
        <div id="overlay" className={active ? "active" : ""}>
            <div id="modal__wrapper">

                <div id="children">
                    {
                        children
                    }
                </div>

            </div>
        </div>
    
    </>
  );
};

export default Modal;