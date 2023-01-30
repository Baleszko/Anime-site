import Image from "next/image";
import style from "../styles/CantFind.module.css";
import sadFaceSvg from "../public/sadface.svg";
function CantFind() {
  return (
    <div className={style.findPage}>
      <div className={style.findBox}>
        <Image src={sadFaceSvg} alt="Sad Face" height={200} width={200} />
        <h3>We can&apos;t find anime with this name.</h3>
        <h2>Try Again!</h2>
      </div>
    </div>
  );
}

export default CantFind;
