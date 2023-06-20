import React from "react";

const Carousel = () => {
  return (
    <>
      <div className='top__main'>
        <div className='content'>
          <div className='title'>
            <h3>Collections</h3>
          </div>
          <div className='description'>
            <p>
              you can explore ans shop many differnt collection from various
              barands here.
            </p>
          </div>
          <div className='button'>
            <i className='fa-sharp fa-solid fa-bag-shopping'></i>
            <a href='/'>Shop Now</a>
          </div>
        </div>
        <div className='image_main'>
          <img
            src='images/image-product.png'
            className='image'
            alt='image-product'
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
