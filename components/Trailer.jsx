import style from "../styles/Trailer.module.css";

function Trailer({ trailer }) {
  return (
    <>
      <h2> Trailer </h2>
      <div className={style.youtubeVideoContainer}>
        <iframe
          className={style.youtubeVideo}
          type="video/webm"
          src={`${trailer}autoplay=0`}
          height="720"
          width="1280"
        ></iframe>
      </div>
    </>
  );
}

export default Trailer;
