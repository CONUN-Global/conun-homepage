import styles from "./Year.module.scss";

function Year({ year, currentYear }: any) {
  return (
    <div className={styles.historyColumn}>
      <div className={styles.verticalBar}>
        <div className={styles.dot}></div>
      </div>
      <div className={styles.singleYear}>
        <h1>{currentYear}</h1>
        {year.map((item: any) => (
          <div key={item.data}>
            <div className={styles.description}>{item.data}</div>
            <img src={item.thumbnail} alt="" className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Year;
