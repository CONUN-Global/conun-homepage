import { useState } from "react";

import { YEARS } from "./RoadMapContent";

import DisplayEvents from "@/components/DisplayEvents";
import displayQuarterlyEvent from "@/helpers/displayQuarterlyEvent";
import styles from "./RoadMapSection.module.scss";

const FIRST = ["Jan", "Feb", "Mar"];
const SECOND = ["Apr", "May", "Jun"];
const THIRD = ["Jul", "Aug", "Sep"];
const FOURTH = ["Oct", "Nov", "Dec"];

const YEARS_ARRAY = [2017, 2018, 2019, 2020, 2021, 2022, 2023];

function RoadMap() {
  const current = new Date();
  const currentYear = current.getFullYear();
  const [yearSelected, setYearSelected] = useState(currentYear);
  const getQuarterFour = displayQuarterlyEvent(YEARS[yearSelected], FOURTH);
  const getQuarterThree = displayQuarterlyEvent(YEARS[yearSelected], THIRD);
  const getQuarterTwo = displayQuarterlyEvent(YEARS[yearSelected], SECOND);
  const getQuarterOne = displayQuarterlyEvent(YEARS[yearSelected], FIRST);

  const yearlyQuarters = [
    { name: "Quarter Four", content: getQuarterFour },
    { name: "Quarter Three", content: getQuarterThree },
    { name: "Quarter Two", content: getQuarterTwo },
    { name: "Quarter One", content: getQuarterOne },
  ].filter((q) => !!q.content.length);

  const handleYearSelect = (year: number) => {
    setYearSelected(year);
  };

  return (
    <div className={styles.RoadMapSection}>
      <div className={styles.Title}>ROADMAP</div>
      {yearlyQuarters.map((quarter, i: number) => {
        const isInversed = i % 2 === 0 ? false : true;
        return (
          <DisplayEvents key={i} isInversed={isInversed} quarter={quarter} />
        );
      })}
      <div className={styles.YearsDisplay}>
        {YEARS_ARRAY.map((year, i) => {
          return (
            <div
              onClick={() => handleYearSelect(year)}
              className={styles.Year}
              key={i}
            >
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
