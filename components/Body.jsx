// import style from "../styles/Body.module.css";
import Recommendations from "./Recommendations";
import TopBar from "./TopBar";

function Body({ recommendations, top }) {
  return (
    <>
      <Recommendations recommendations={recommendations}></Recommendations>
      <TopBar top={top}></TopBar>
    </>
  );
}

export default Body;
