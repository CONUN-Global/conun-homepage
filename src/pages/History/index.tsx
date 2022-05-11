import styles from "./History.module.scss";
import { useState } from "react";
import Year from "./Year";
import historyData from "./historyData.json";

function History() {
  const [selectedYear, setSelectedYear] = useState([0, 1]);

  const currentData = [
    historyData[selectedYear[0]],
    historyData[selectedYear[1]],
  ];

  let years: number[] = [];

  if (JSON.stringify(selectedYear) === JSON.stringify([0, 1]))
    years = [2022, 2021];
  if (JSON.stringify(selectedYear) === JSON.stringify([2, 3]))
    years = [2020, 2019];
  if (JSON.stringify(selectedYear) === JSON.stringify([4, 5]))
    years = [2018, 2017];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.HeadlineContainer}>
        <h1>History Page</h1>
      </div>
      <div className={styles.subtitleSelectContainer}>
        <h3>Our History</h3>
        <div className={styles.buttonContainer}>
          <button>공지 & 소식</button>
          {/* <button>개발관련</button> */}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.yearBtnContainer}>
          <button
            className={styles.yearBtn}
            onClick={() => setSelectedYear([0, 1])}
          >
            2022-2021
          </button>
          <button
            className={styles.yearBtn}
            onClick={() => setSelectedYear([2, 3])}
          >
            2020-2019
          </button>
          <button
            className={styles.yearBtn}
            onClick={() => setSelectedYear([4, 5])}
          >
            2018-
          </button>
        </div>

        <div className={styles.historyContainer}>
          {currentData.map((yeardata, i) => (
            <Year key={i} year={yeardata} currentYear={years[i]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
