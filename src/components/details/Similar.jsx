import Switch from "../Switch";
import SwiperReact from "../Swiper";

function Similar({ title, data, endPoint }) {
  return (
    <div className="container py-5">
      <Switch title={title} />
      <SwiperReact data={data?.results} type="regular" endPoint={endPoint} />
    </div>
  );
}

export default Similar;
