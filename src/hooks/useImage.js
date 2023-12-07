// import { useFetch } from "./useFetch";
// import noPoster from "../../public/no-poster.png";

// export const useImage = (imagePath) => {
//   const { loading, error, data } = useFetch(`/configuration`);
//   {
//     loading && <h1>Loading ...</h1>;
//   }
//   {
//     error && <h1>{error}...</h1>;
//   }
//   {
//     !loading && data !== null;
//   }
//   const url = data?.images?.base_url + "original";
//   return imagePath !== null ? url + imagePath : noPoster;
// };

// Another way
import { useSelector } from "react-redux";
import noPoster from "../assets/no-poster.png";

export const useImage = (imagePath, tempImg) => {
  const url = useSelector((state) => state?.home?.url);
  return imagePath !== null ? `${url}` + imagePath : tempImg || noPoster;
};
