import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Switch from "../Switch";
import SwiperReact from "../Swiper";
import Loader from "../Loader";

function Rated() {
  const [endPoint, setEndPoint] = useState("movie");
  const { loading, data, error } = useFetch(`/${endPoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="container py-10">
      <Switch
        title="Top Rated"
        tabs={["Movies", "TV Shows"]}
        onTabChange={onTabChange}
      />
      {loading && <Loader />}
      {error && <h4 className="text-center">{error}</h4>}
      {!loading && data !== null ? (
        <div>
          <SwiperReact
            endPoint={endPoint}
            data={data?.results}
            type="regular"
          />
        </div>
      ) : null}
    </div>
  );
}

export default Rated;
