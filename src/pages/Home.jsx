import FromYourWatchlist from "../components/home/FromYourWatchlist";
import Landing from "../components/home/Landing";
import Rated from "../components/home/Rated";
import Trending from "../components/home/Trending";

function Home() {
  return (
    <>
      <Landing />
      <FromYourWatchlist />
      <Trending />
      <Rated />
    </>
  );
}

export default Home;
