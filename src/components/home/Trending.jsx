import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import SwiperReact from "../Swiper";
import Switch from "../Switch";
import Loader from "../Loader";

function Trending() {
  const [endPoint, setEndPoint] = useState("day");
  const { loading, data, error } = useFetch(`/trending/all/${endPoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="container">
      <Switch
        title="Trending"
        tabs={["Day", "Week"]}
        onTabChange={onTabChange}
      />
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
      {!loading && data !== null ? (
        <SwiperReact type="regular" data={data?.results} />
      ) : null}
    </div>
  );
}

export default Trending;
