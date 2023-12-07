import Video from "./Video";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { regularBreakPoints } from "../../data/data";
import Switch from "../Switch";
function Videos({ data }) {
  return (
    <div className="container">
      <Switch title="Videos" />
      <Swiper
        breakpoints={regularBreakPoints}
        spaceBetween={30}
        className="mySwiper my-7"
      >
        {data.results?.map((item) => (
          <SwiperSlide
            className="w-full rounded-md overflow-hidden"
            key={item?.id}
          >
            <Video item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Videos;
