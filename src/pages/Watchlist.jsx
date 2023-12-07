import { useSelector } from "react-redux";

import WatchlistItems from "../components/WatchlistItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";

function Watchlist() {
  const data = useSelector((state) => state.watchlist);
  return (
    <div className="container relative min-h-[calc(100vh-120px-58px)] py-5 flex flex-col gap-5 max-[576px]:gap-20">
      {data.length === 0 && (
        <h1 className="absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%] font-semibold justify-self-center justify-center text-red-600 flex items-center gap-3">
          Your WatchList Is Empty
          <FontAwesomeIcon icon={faFaceFrown} className="text-xl" />
        </h1>
      )}

      {data?.map((item) => {
        return (
          <WatchlistItems
            key={`${item?.id}${item?.name || item?.title} `}
            item={item}
          />
        );
      })}
    </div>
  );
}

export default Watchlist;
