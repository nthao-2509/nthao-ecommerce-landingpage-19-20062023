import React from "react";
import { StyleFooter } from "./style";
import Container from "./Container";

const Footer = () => {
  return (
    <StyleFooter>
      <Container>
        <div className='list'>
          <div className='list__items'>
            <div className='top'>
              <img src='images/logo.png' alt='logo-footer' className='image' />
            </div>
            <div className='content'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                nisi consequatur dicta ducimus laboriosam aliquam quae veniam
              </span>
            </div>
            <div className='icons'>
              <a href=''>
                <i className='fa-brands fa-facebook-f'></i>
              </a>

              <a href=''>
                <i className='fa-brands fa-twitter'></i>
              </a>

              <a href=''>
                <i className='fa-brands fa-instagram'></i>
              </a>
            </div>
          </div>
          <div className='list__items'>
            <div className='title'>CataLog</div>
            <div className='content'>
              <ul>
                {Array.from({ length: 5 }).map((item: any, index: number) => (
                  <li>
                    <a href=''>item - {index + 1}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='list__items'>
            <div className='title'>About Us</div>
            <div className='content'>
              <ul>
                {Array.from({ length: 5 }).map((item: any, index: number) => (
                  <li>
                    <a href=''>item - {index + 1}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='list__items'>
            <div className='title'>Customer Service</div>
            <div className='content'>
              <ul>
                {Array.from({ length: 5 }).map((item: any, index: number) => (
                  <li>
                    <a href=''>item - {index + 1}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='bottom'></div>
      </Container>
    </StyleFooter>
  );
};

export default Footer;
