import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { dataBrand } from "modules/data-fake";
import { StyleBrand } from "./style";

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
const Brand = () => {
  return (
    <StyleBrand>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        breakpoints={breakPoints}
        modules={[Autoplay]}
        className='mySwiper'
      >
        {dataBrand?.map(
          (brand: {
            id: string | number;
            image: string;
            href: string;
            title: string;
          }) => (
            <SwiperSlide key={brand.id}>
              <div className='image__brand'>
                <img src={brand.image} className='image' alt={brand.title} />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </StyleBrand>
  );
};

export default Brand;
