// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { regularBreakPoints, smallBreakPoints } from "../data/data";
import Item from "./Item";

function SwiperReact({ data, type, endPoint, icon }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        breakpoints={type === "regular" ? regularBreakPoints : smallBreakPoints}
        className="mySwiper my-7"
        lazyPreloadPrevNext={true}
        grabCursor
      >
        {data?.map((item) => (
          <SwiperSlide
            className="w-full"
            key={`${item?.id}${item?.name || item?.title} `}
          >
            <Item icon={icon} endPoint={endPoint} data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default SwiperReact;
