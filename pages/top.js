import { useEffect, useState } from "react";
import Header from "../components/Header";
import TopAnimesCard from "../components/TopAnimesCard";

function TopAnimes() {
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
      {/* <TopAnimesCard></TopAnimesCard> */}
    </>
  );
}

export default TopAnimes;
