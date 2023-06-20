import React from "react";
import { StylePopular } from "./style";

const Popular = () => {
  return (
    <StylePopular>
      <div className='title'>
        <h1>Explore new and popular styles</h1>
      </div>
      <div className='cards'>
        {Array.from({ length: 5 }).map((item: any, index: number) => {
          return (
            <div className='cards__item'>
              <div className='item__image' key={index}>
                <img
                  src={`images/popular-${index + 1}.png`}
                  alt={`${index}`}
                  className='image'
                />
              </div>
            </div>
          );
        })}
      </div>
    </StylePopular>
  );
};

export default Popular;
