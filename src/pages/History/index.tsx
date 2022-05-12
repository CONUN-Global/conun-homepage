import styles from "./History.module.scss";
import { useState } from "react";
import Year from "./Year";
import historyData from "./historyData.json";
import Button from "./Button";

function History() {
  const [selectedYear, setSelectedYear] = useState(0);
  const currentData = historyData[selectedYear];

  //Set the variable 'years' to the string for the H1
  let years: number[] = [];
  if (selectedYear === 0) years = [2022, 2021];
  if (selectedYear === 1) years = [2020, 2019];
  if (selectedYear === 2) years = [2018, 2017];

  const buttonInfo = [
    [2022, 2021],
    [2020, 2019],
    [2018, ""],
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.HeadlineContainer}>
          <h1>History Page</h1>
        </div>
        <div className={styles.subtitleSelectContainer}>
          <h3>Our History</h3>
        </div>
        <div className={styles.container}>
          <div className={styles.yearBtnContainer}>
            {buttonInfo.map((item, index) => (
              <Button
                key={index}
                index={index}
                item={item}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
              />
            ))}
          </div>

          <div className={styles.historyContainer}>
            {currentData.map((yeardata, i) => (
              <Year key={i} year={yeardata} currentYear={years[i]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
