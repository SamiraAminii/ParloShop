// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import images from "../../constants/images";
// Import Swiper styles
import "swiper/css";
import Styles from "./CommentArea.module.css";

// import required modules
import { Autoplay } from "swiper";

export default function CommentArea(props) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
        // breakpoints={{
        //   320: {
        //     slidesPerView: 1,
        //   },
        //   575: {
        //     slidesPerView: 2,
        //   },
        //   990: {
        //     slidesPerView: 3,
        //   },

        //   1440: {
        //     slidesPerView: 4,
        //   },
        // }}
        className={Styles["my-swiper"]}
        style={{ backgroundImage: `url(${images.bg1})` }}
      >
        {/* {props.productsData} */}
        {props.CommentData.map(({ id, img, comment, name }) => (
          <SwiperSlide key={id} className={Styles["each-slid"]}>
            <div className={Styles["clint-img"]}>
              <img src={img} />
            </div>
            <div className={Styles["clint-comment"]}>
              <p>{comment}</p>
            </div>
            <div className={Styles["clint-name"]}>
              <img src={images.testi} />
              <h4>{name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
