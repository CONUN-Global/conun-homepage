import { YEARS } from "./RoadMapContent";
import { YearObj } from "./YearDisplay";
import YearDisplay from "./YearDisplay";
import styles from "./RoadMapSection.module.scss";

const YEARS_ARRAY = [2017, 2018, 2019, 2020, 2021, 2022, 2023];

function RoadMap() {
  return (
    <div className={styles.RoadMapSection}>
      <div className={styles.Title}>ROADMAP</div>
      <div>
        {YEARS[2017].events.map((year: YearObj, id: number) => {
          return <YearDisplay key={id} year={year} />;
        })}
      </div>
      <div className={styles.YearsDisplay}>
        {YEARS_ARRAY.map((year, i) => {
          return (
            <div className={styles.Year} key={i}>
              <h3>{year}</h3>
            </div>
          );
        })}
      </div>

      <div className={styles.Line}></div>
    </div>
  );
}
export default RoadMap;
