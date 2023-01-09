import Image from "next/image";
import style from "../styles/Error.module.css";
function Error() {
  return (
    <div className={style.errorPage}>
      <div className={style.errorBox}>
        <Image
          className={style.sadface}
          src="/error.svg"
          alt="Error"
          height={200}
          width={200}
        />
        <h2>Something went wrong</h2>
        <h2>Try Again!</h2>
      </div>
    </div>
  );
}

export default Error;
