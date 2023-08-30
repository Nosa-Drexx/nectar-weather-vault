import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import ForcastSingle from "../ForcastWeather/ForcastSingle";

const SwipperContainer = ({
  contents,
  count,
  xxlCount,
  xlCount,
  lgCount,
  mdCount,
  smCount,
  xsCount,
  xmdCount,
  navBtnId = "navBtn",
}) => {
  return (
    <div className="swiper-wrapper">
      {contents.length > 0 && (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: xsCount || 1.7,
            },
            500: {
              slidesPerView: smCount || 3.7,
            },
            600: {
              slidesPerView: xmdCount || 3.7,
            },
            768: {
              slidesPerView: mdCount || 4.1,
            },
            992: {
              slidesPerView: lgCount || 4.3,
            },
            1200: {
              slidesPerView: xlCount || count || 4.5,
            },
            1300: {
              slidesPerView: xxlCount || count || 5.5,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            clickable: true,
            nextEl: `.${navBtnId}-next`,
            prevEl: `.${navBtnId}-prev`,
          }}
        >
          {contents.map((content, index) => {
            return (
              <SwiperSlide key={index}>
                <ForcastSingle data={content} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default SwipperContainer;
