import { useDispatch } from "react-redux";
import { useImage } from "../hooks/useImage";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { remove } from "../toolkit/slices/watchlistSlice";

function WatchlistItems({ item }) {
  const dispatch = useDispatch();
  const posterPath = useImage(item?.poster_path);

  return (
    <div
      key={`${item?.id}${item?.name || item?.title} `}
      className="bg-gray-800 p-4 rounded-md flex relative items-center gap-5 max-[576px]:flex-col"
    >
      <FontAwesomeIcon
        icon={faXmark}
        className="absolute z-10 bg-[#BB86FC] text-white p-2 rounded-md top-4 right-4 cursor-pointer opacity-70 hover:opacity-100 transition duration-200"
        onClick={() => {
          dispatch(remove(item));
        }}
      />

      <img
        className="w-32 rounded-md"
        src={posterPath}
        alt={item?.name ? item?.name : item?.title}
      />

      <div className="flex flex-col gap-5">
        <div className="flex gap-10 items-center max-[576px]:justify-center">
          <h3 className="font-semibold text-[#BB86FC]">
            {item?.name ? item?.name : item?.title}
          </h3>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <span>{item.vote_average}</span>
          </div>
        </div>
        <p className="opacity-70 text-sm font-semibold max-[576px]:text-center">
          {item?.overview}
        </p>
      </div>
    </div>
  );
}

export default WatchlistItems;
