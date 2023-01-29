import style from "../styles/RelationDetails.module.css";

function RelationDetails({ relation, entry }) {
  return (
    <div className={style.relationContainer}>
      <h2>{relation}</h2>
      {entry.map((item, index) => (
        <div className={style.relationData} key={index}>
          <h4 className={style.firstTitle}>Title</h4>
          <h4 className={style.secondTitle}>Type</h4>
          <h4 className={style.thirdTitle}>Link</h4>

          <p className={style.firstData}>{item.name}</p>
          <p className={style.secondData}>{item.type}</p>
          <p className={style.thirdData}>
            <a
              className={style.link}
              rel="noopener noreferrer"
              target="_blank"
              href={item.url}
            >
              {item.url}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default RelationDetails;
