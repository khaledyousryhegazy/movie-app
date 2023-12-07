import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ItemDetails from "../components/details/ItemDetails";
import Loader from "../components/Loader";
import Videos from "../components/details/Videos";
import Credits from "../components/details/Credits";
import Similar from "../components/details/Similar";
function Details() {
  const { mediaType, id } = useParams();
  const title = mediaType === "movie" ? "Movie" : "Tv Show";
  //Item details
  const {
    loading: itemLoading,
    data: itemDetails,
    error: itemError,
  } = useFetch(`/${mediaType}/${id}`);

  //Item videos
  const {
    loading: videoLoading,
    data: videoDetails,
    error: videoError,
  } = useFetch(`/${mediaType}/${id}/videos`);

  //Item cast
  const {
    loading: castLoading,
    data: castDetails,
    error: castError,
  } = useFetch(`/${mediaType}/${id}/credits`);

  //Item similar
  const {
    loading: similarLoading,
    data: similarDetails,
    error: similarError,
  } = useFetch(`/${mediaType}/${id}/similar`);

  // Validation
  // Loading
  if (itemLoading || videoLoading || castLoading || similarLoading) {
    return <Loader />;
  }
  //   Error
  if (itemError || videoError || castError || similarError) {
    return <h3 className="text-center text-red-600">{itemError}</h3>;
  }

  return (
    <div className="container py-5 min-h-[calc(100vh-58px-85px)]">
      {itemDetails?.id ? (
        <ItemDetails data={itemDetails} />
      ) : (
        <h1>Error ...</h1>
      )}
      {videoDetails?.results?.length > 0 && <Videos data={videoDetails} />}
      {castDetails?.cast?.length > 0 && <Credits data={castDetails} />}
      {similarDetails?.results?.length > 0 && (
        <Similar data={similarDetails} endPoint={mediaType} title={title} />
      )}
    </div>
  );
}

export default Details;
