import style from "../styles/TopBar.module.css";
import TopBarCard from "./TopBarCard";

function TopBar({ top }) {
  return (
    <aside className={style.aside}>
      {top.map((topItem) => (
        <TopBarCard key={topItem.mal_id} topItem={topItem}></TopBarCard>
      ))}
    </aside>
  );
}

export default TopBar;
