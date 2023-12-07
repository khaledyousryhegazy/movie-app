import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import Loader from "../Loader";
import Switch from "../Switch";
import Item from "../Item";
import Navigation from "../Navigation";

function SearchResults() {
  const [values, setValues] = useState({
    data: null,
    pageNum: 1,
    loading: false,
  });

  const { data, pageNum, loading } = values;
  const query = useParams();

  //   Fetch data
  const fetchInitialData = () => {
    setValues({ ...values, loading: true });
    fetchDataFromApi(`/search/multi?query=${query.query}&page=${pageNum}`).then(
      (res) => {
        setValues({
          ...values,
          data: res.results,
        });
      }
    );
  };

  //   Pages
  //   Next page
  const nextPage = () => {
    setValues({ ...values, pageNum: pageNum + 1 });
  };
  //   Next page
  const prevPage = () => {
    if (pageNum > 1) {
      setValues({ ...values, pageNum: pageNum - 1 });
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, [query, pageNum]);

  if (loading) {
    <Loader />;
  }

  return (
    <div className="container py-5">
      <Switch
        title={`Found ${pageNum > 1 ? "More" : ""} ${
          data?.length > 1
            ? data?.filter((items) => items.media_type !== "person").length
            : "0"
        } Results For "${query.query}" .`}
      />

      <div className="pt-5 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[20px]">
        {data?.length > 0 &&
          data
            ?.filter((item) => item?.media_type !== "person")
            .map((item) => <Item data={item} key={item.id} />)}
      </div>

      <Navigation
        data={data}
        nextPage={nextPage}
        prevPage={prevPage}
        pageNum={pageNum}
      />
    </div>
  );
}

export default SearchResults;
