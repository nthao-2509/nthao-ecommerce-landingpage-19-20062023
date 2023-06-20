import React from "react";
import { StyleBannerHome } from "./style";

const Banner = () => {
  return (
    <StyleBannerHome>
      <div className='shape'>
        <img src='images/zara-logo-bg.png' alt='' className='image' />
      </div>
      <div className='content'>
        <div className='title'>
          <img src='images/zara-logo-1.png' className='image' alt='' />
        </div>
        <div className='description'>
          <span>
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </span>
        </div>
        <button className='button'>See collection</button>
      </div>
    </StyleBannerHome>
  );
};

export default Banner;
