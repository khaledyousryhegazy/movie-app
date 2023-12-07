import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchApiConfig } from "./toolkit/slices/homeSlice";
import Watchlist from "./pages/Watchlist";
import Details from "./pages/Details";
import Search from "./pages/Search";
import NotFound from "./components/NotFound";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiConfig());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-show" element={<Tv />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/watch-list" element={<Watchlist />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="search/:query" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
