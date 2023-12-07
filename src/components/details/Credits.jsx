import Switch from "../Switch";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { smallBreakPoints } from "../../data/data";
import Cast from "./Cast";

function Credits({ data }) {
  return (
    <div className="container py-5">
      <Switch title="Cast" />

      <Swiper
        breakpoints={smallBreakPoints}
        spaceBetween={30}
        className="mySwiper my-7"
      >
        {data.cast?.map((item) => (
          <SwiperSlide
            className="w-full rounded-md overflow-hidden"
            key={item?.id}
          >
            <Cast item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Credits;
