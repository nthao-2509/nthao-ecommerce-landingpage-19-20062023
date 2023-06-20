import React from "react";
import { StyleTrendingProduct } from "./style";
import { StyleCardItems } from "common/style";
import { formatter } from "config/numberFormat";

const TrendingProduct = () => {
  return (
    <StyleTrendingProduct>
      <div className='title'>
        <h1 className='main__title'>Trending Product</h1>
      </div>
      <div className='tabs'>
        <ul>
          <li className='active'>All Product</li>
          <li>T-Shirt</li>
          <li>Hoodies</li>
          <li>Jacket</li>
        </ul>
        <button className='button'>
          <i className='fa-solid fa-filter' />
          <span>Filter</span>
        </button>
      </div>
      <StyleCardItems>
        <div className='cards'>
          {Array.from({ length: 8 }).map((item: any, index: number) => (
            <div className='cards__item' key={index}>
              <div className='cards__item-flag'>
                {Math.random() < 0.5 ? (
                  <span className='sale'>Sale</span>
                ) : (
                  <span className='hot'>Hot</span>
                )}
              </div>
              <div className='cards__item-image'>
                <img
                  src={`images/trending-product-${index}.png`}
                  alt={`image-${index}`}
                  className='image'
                />
              </div>
              <div className='cards__item-content'>
                <div className='title'>title {index}</div>
                <div className='content-bottom'>
                  <div className='collection'>collection {index}</div>
                  <div className='price'>
                    <span className='old-price'>
                      {formatter.format(
                        Number((Math.random() * 100).toFixed(2))
                      )}
                    </span>
                    <span className='new-price'>
                      {formatter.format(
                        Number((Math.random() * 100).toFixed(2))
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </StyleCardItems>
    </StyleTrendingProduct>
  );
};

export default TrendingProduct;
