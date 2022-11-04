import Image from "next/image";
import style from "../styles/TopBarCard.module.css";

function TopBarCard({ topItem }) {
  return (
    <div className={style.container}>
      <Image
        src={topItem.images.webp.image_url}
        alt={topItem.title}
        height="120"
        width="100"
      ></Image>
      <h4> {topItem.title} </h4>
    </div>
  );
}

export default TopBarCard;
