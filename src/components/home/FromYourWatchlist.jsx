import Switch from "../Switch";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { regularBreakPoints } from "../../data/data";

import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import LazyImg from "../LazyImg";

function FromYourWatchlist() {
  const data = useSelector((state) => state?.watchlist);
  const url = useSelector((state) => state?.home?.url);

  return (
    <div className="container py-10">
      <Switch title="From you watch list" />
      {data?.length > 0 ? (
        <div>
          <Swiper
            spaceBetween={30}
            breakpoints={regularBreakPoints}
            className="mySwiper my-7"
          >
            {data?.map((item) => (
              <SwiperSlide
                className="w-full"
                key={`${item?.id}${item?.name || item?.title} `}
              >
                <div className="relative">
                  <LazyImg
                    style="object-contain bg-center"
                    src={url + item?.poster_path}
                    alt={item?.name || item?.title}
                  />

                  <h3 className="my-2 p-2 h-fit text-center text-sm font-semibold m-0 ">
                    {item?.name || item?.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <h1 className="text-red-600 font-semibold text-xl text-center py-16">
          Your Watch Is Empty <FontAwesomeIcon icon={faFaceFrown} />
        </h1>
      )}
    </div>
  );
}

export default FromYourWatchlist;
