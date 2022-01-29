import React from 'react';

const ItemCarousel = ({data}) => {

  return (
    <a href={data.linkToProject} target={"_blank"}  rel="noreferrer">
        <div className="wrapper__image__microproyect__carousel">
                <img src={data.mainImgageView} alt="" />
        </div>
    </a>
  );
};

export default ItemCarousel;
