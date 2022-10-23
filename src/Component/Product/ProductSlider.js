// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "./ProductCard";

// Import Swiper styles
import "swiper/css";

export default function ProductSlider(props) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        // spaceBetween={20}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            
          },
          575: {
            slidesPerView: 2,
            
          },
          990: {
            slidesPerView: 3,
          },

          1440: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {/* {props.productsData} */}
        {props.productsData.map(({ id, img, category, price, name }) => (
          <SwiperSlide key={id}>
            <ProductCard
              name={name}
              img={img}
              category={category}
              price={price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
