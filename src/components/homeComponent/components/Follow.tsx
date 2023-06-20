import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { StyleFollow } from "./style";
import Subscribe from "./Subscribe";
import Container from "common/Container";
const breakPoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 50,
  },
};
const Follow = () => {
  return (
    <StyleFollow>
      <Container>
        <div className='title'>
          <h1 className='main__title'>
            Follow products and discounts on Instagram
          </h1>
        </div>
        <div className='content'>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            breakpoints={breakPoints}
            modules={[Autoplay]}
            className='mySwiper'
          >
            {Array.from({ length: 6 })?.map((brand: any, index: number) => (
              <SwiperSlide key={index}>
                <div className='image_follow'>
                  <img
                    src={`images/follow-${index + 1}.png`}
                    className='image'
                    alt={""}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Subscribe />
      </Container>
    </StyleFollow>
  );
};

export default Follow;
