import {
  fetchDiscoverData,
  getDiscoverData,
} from "../toolkit/slices/discoverSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "./Loader";
import Item from "./Item";
import Switch from "./Switch";
import Navigation from "./Navigation";

function ItemsList({ endPoint }) {
  const dispatch = useDispatch();
  const title = endPoint === "movie" ? "Movies" : "TV Shows";
  const { data, loading, error } = useSelector((state) => state.discover);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  useEffect(() => {
    dispatch(fetchDiscoverData({ type: endPoint, page: currentPage }));
  }, [dispatch, currentPage, endPoint]);

  if (loading) return <Loader />;
  if (error) return <h3>Error ...</h3>;

  return (
    <div className="container py-5">
      <Switch title={title} />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] max-[768px]:grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-[20px]">
        {data?.results?.length > 0 &&
          data?.results?.map((item) => (
            <Item key={item?.id} data={item} endPoint={endPoint} />
          ))}
      </div>

      <Navigation
        prevPage={handlePrevPage}
        nextPage={handleNextPage}
        pageNum={currentPage}
        data={data}
      />
    </div>
  );
}

export default ItemsList;
