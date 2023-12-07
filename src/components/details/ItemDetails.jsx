import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useImage } from "../../hooks/useImage";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";

function ItemDetails({ data }) {
  const url = useSelector((state) => state?.home?.url);
  const posterPath = useImage(data?.poster_path);

  return (
    <div className="container py-5 flex gap-5 max-[992px]:flex-col">
      <img
        src={posterPath}
        className="w-48 max-[992px]:m-auto rounded-md object-cover"
        alt={data?.title || data?.name}
      />
      {/* info */}
      <div className="flex flex-col justify-center gap-3  ">
        {/* title */}
        <div className="flex gap-3 items-center max-[768px]:flex-col max-[768px]:items-start ">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-red-600">
              {data?.title || data?.name}
            </h1>
            <span className="flex items-center gap-2">
              {data?.vote_average}
              <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            </span>
          </div>
          {/* logos */}
          <div className="flex items-center gap-3">
            {data?.production_companies?.map((e) =>
              e?.logo_path !== null ? (
                <div
                  key={e?.logo_path}
                  className="flex items-center justify-center rounded-md bg-gray-200 p-1"
                >
                  <img
                    src={e?.logo_path && url + e?.logo_path}
                    alt={e?.title || e?.name}
                    className="w-10 aspect-video object-contain"
                  />
                </div>
              ) : null
            )}
          </div>
        </div>
        {/* data and status */}
        <div>
          <span className="font-semibold text-red-600">Date</span> :{" "}
          <span className="text-sm font-semibold opacity-80">
            {data?.release_date || data?.first_air_date}
          </span>
        </div>
        <div>
          <span className="font-semibold text-red-600">Status</span> :{" "}
          <span className="text-sm font-semibold opacity-80">
            {data?.status}
          </span>
        </div>
        {/* overview */}
        {data?.overview ? (
          <div>
            <span className="font-semibold text-red-600"> Overview</span> :{" "}
            <p className="inline text-sm font-semibold opacity-70">
              {data?.overview}
            </p>
          </div>
        ) : null}
        {/* genres */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold text-red-600">Genres</span> :
          {data?.genres.map((e) => {
            return (
              <span
                key={e.id}
                className="text-sm font-semibold opacity-80 p-1 bg-gray-200 rounded-md"
              >
                {e?.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
