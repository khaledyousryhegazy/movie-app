import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useImage } from "../hooks/useImage";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../toolkit/slices/watchlistSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Item({ icon, data, endPoint }) {
  const dispatch = useDispatch();
  const posterPath = useImage(data?.poster_path);

  return (
    <div className="relative">
      {icon !== false && (
        <FontAwesomeIcon
          className="absolute z-10 bg-[#BB86FC] text-white p-2 rounded-md top-2 right-2 cursor-pointer opacity-70 hover:opacity-100 transition duration-200"
          icon={faPlus}
          onClick={() => dispatch(add(data))}
        />
      )}

      <Link
        to={`/${data?.media_type || endPoint}/${data?.id}`}
        className="relative block"
      >
        <div
          className="w-full h-72 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${posterPath})` }}
        />

        <h3 className="my-2 p-2 h-fit text-sm font-semibold text-center">
          {data?.name || data?.title}
        </h3>
      </Link>
    </div>
  );
}

export default Item;
