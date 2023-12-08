import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useImage } from "../hooks/useImage";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../toolkit/slices/watchlistSlice";
import LazyImg from "./LazyImg";

function Item({ icon, data, endPoint }) {
  const dispatch = useDispatch();
  const posterPath = useImage(data?.poster_path);
  return (
    <div className="relative">
      {icon !== false ? (
        <FontAwesomeIcon
          className="absolute z-10 bg-red-600 text-white p-2 rounded-md top-2 right-2 cursor-pointer opacity-70 hover:opacity-100 transition duration-200"
          icon={faPlus}
          onClick={() => {
            dispatch(add(data));
          }}
        />
      ) : null}
      <Link
        to={`/${data?.media_type || endPoint}/${data?.id}`}
        className="relative"
      >
        <LazyImg
          style="object-contain bg-center"
          src={posterPath}
          alt={data?.name || data?.title}
        />

        <h3 className="my-2 p-2 h-fit text-sm font-semibold m-0 text-center">
          {data?.name || data?.title}
        </h3>
      </Link>
    </div>
  );
}

export default Item;
