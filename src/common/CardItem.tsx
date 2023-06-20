import { formatter } from "config/numberFormat";
import React from "react";

const CardItem = ({ product, key }: { product?: any; key: number }) => {
  return (
    <div className='cards__item' key={key}>
      <div className='cards__item-flag'>
        {Math.random() < 0.5 ? (
          <span className='sale'>Sale</span>
        ) : (
          <span className='hot'>Hot</span>
        )}
      </div>
      <div className='cards__item-image'>
        <img
          src={`images/trending-product-${key}.png`}
          alt={`image-${key}`}
          className='image'
        />
      </div>
      <div className='cards__item-content'>
        <div className='title'>title {key}</div>
        <div className='content-bottom'>
          <div className='collection'>collection {key}</div>
          <div className='price'>
            <span className='old-price'>
              {formatter.format(Number((Math.random() * 100).toFixed(2)))}
            </span>
            <span className='new-price'>
              {formatter.format(Number((Math.random() * 100).toFixed(2)))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
