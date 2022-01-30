import React from 'react';
import '../styles/modalStyle.css'
import {useSelector, useDispatch} from 'react-redux';
import { AiOutlineCloseCircle } from "react-icons/ai"
import { closeModal } from '../action/ui';

const Modal = () => {
    
    const dispatch = useDispatch();

    
    const {dataModal, openModal} = useSelector( state => state.ui )
    
    
    const handleCloseModal = ()=> {
        dispatch(closeModal());
    }

  return (
    
    <>
        {
            openModal
                &&
                <div id="overlay" className={openModal ? "active" : ""}>
                    <div id="modal__wrapper" className="col-12 col-sm-11 col-md-11 col-lg-10">
                        <div 
                            className="icon__close__modal"
                            >
                            <AiOutlineCloseCircle 
                                className='icon_close'
                                onClick={handleCloseModal}
                                
                            />

                        </div>

                        <div id="children" className="container-fluid d-flex flex-column flex-sm-column flex-md-column flex-lg-row  justify-content-center align-items-center">

                            {/* left */}
                            <div className="left-modal">
                                
                                    {
                                        dataModal["galery-Image"].map((linkImage, index) => (

                                            <div key={index+"image_proyects"} className="wrapper__image image-gallery-wrapper1">
                                                <img src={linkImage} alt="" />
                                            </div>
                                        ))
                                    }

                            </div>

                            {/* right */}
                            <div className="right-modal">
                                <h1>{dataModal.title}</h1>
                                <p className="resume">{dataModal.resume}</p>
                                <h6>Tecnologias:</h6>
                                {
                                    dataModal.tecnologias.map((tecnologia, index)=> (
                                        <span  key={index+"tecnologias_proyects"} className='badge badge-warning mx-1'>{tecnologia}</span>

                                    ))
                                }
                                <h6 className="my-3">Sobre el proyecto:</h6>
                                <p className="about-project">{dataModal.descripcion}</p>
                                <a className="btn btn-warning" href={dataModal.link} role="button" target={"_blank"} rel="noreferrer">Go to project</a>
                                <a className="btn btn-warning mx-2" href={dataModal.linkToGitHub} role="button" target={"_blank"} rel="noreferrer">Go to GitHub</a>
                            </div>
                        </div>

                    </div>
                </div>
        }
    
    </>
  );
};

export default Modal;