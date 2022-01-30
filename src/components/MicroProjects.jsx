import React from 'react';
import responsiveCarousel from '../helpers/responsiveParametersCarousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import microProyects from '../helpers/microProyects';
import ItemCarousel from './ItemCarousel';

const MicroProjects = () => {


  return (
      <div className='container'>
        <h4>Micro Proyects</h4>
        <Carousel 
            responsive={responsiveCarousel}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            infinite={true}
            centerMode={true}
            containerClass="container_carousel_wrapper"
            itemClass="carousel__item__wrapper"
        >
            {
                microProyects.mircroProyects.map((data, index)=> (
                    <ItemCarousel key={data.id} data={data}/>
                ))
            }
            
        </Carousel>
      </div>
  );
};

export default MicroProjects;
