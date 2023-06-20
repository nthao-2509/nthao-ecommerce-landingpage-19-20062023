import React from "react";
import { StyleSubscribe } from "./style";
import Container from "common/Container";

const Subscribe = () => {
  return (
    <StyleSubscribe>
      <div className='title'>
        <h1 className='main__title'>Or subscribe to the newsletter</h1>
        <div className='content'>
          <div className='input'>
            <input type='text' id='input' placeholder=' ' />
            <label htmlFor='input' className='label'>
              Email address...
            </label>
          </div>
          <button>
            SUBMIT
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </StyleSubscribe>
  );
};

export default Subscribe;
