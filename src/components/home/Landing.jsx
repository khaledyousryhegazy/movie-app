import { useFetch } from "../../hooks/useFetch";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import Loader from "../Loader";
import { useSelector } from "react-redux";
import LazyImg from "../LazyImg";

function Landing() {
  const { data, loading, error } = useFetch("/movie/upcoming");

  const url = useSelector((state) => state?.home?.url);

  return (
    <div className="container ">
      {loading && <Loader />}
      {error && <h1 className="flex justify-center p-5">{error}</h1>}
      {!loading && data !== null ? (
        <Swiper
          grabCursor={true}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper my-7"
        >
          {data.results?.map((item) => {
            return item.backdrop_path !== null ? (
              <SwiperSlide
                className="w-[100%] rounded-md overflow-hidden"
                key={item?.id}
              >
                <LazyImg
                  className="object-cover rounded-md "
                  src={` ${url + item.backdrop_path}`}
                  alt={item?.name || item?.title}
                />
              </SwiperSlide>
            ) : null;
          })}
        </Swiper>
      ) : null}
    </div>
  );
}

export default Landing;
