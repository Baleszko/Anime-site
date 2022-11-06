import { useEffect, useState } from "react";
import Header from "../components/Header";
import TopAnimes from "../components/TopAnimes";

function Top() {
  const [topAnimes, setTopAnimes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const topAnimeFetch = await fetch("https://api.jikan.moe/v4/top/anime");
      const jsonTopAnimes = await topAnimeFetch.json();
      setTopAnimes(jsonTopAnimes.data);
      console.log("done");
    };

    fetchData();
  }, []);

  return (
    <>
      <Header></Header>
      <TopAnimes top={topAnimes}></TopAnimes>
    </>
  );
}

export default Top;
