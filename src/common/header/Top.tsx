import React from "react";

const Top = () => {
  return (
    <>
      <div className='top d-flex align-items-center justify-content-space-between'>
        <div className='search'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
        <div className='logo'>
          <div className='logo__image'>
            <img src='images/logo.png' className='image' alt='logo' />
          </div>
        </div>
        <div className='user d-flex align-item-center'>
          <div className='item d-flex align-item-center'>
            <i className='fa-solid fa-user'></i>
            <span>Account</span>
          </div>
          <div className='item d-flex align-item-center justify-content-center'>
            <i className='fa-solid fa-cart-shopping'></i>
            <span>Shopping</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
