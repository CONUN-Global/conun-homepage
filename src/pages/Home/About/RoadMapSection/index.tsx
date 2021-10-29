import { useState } from "react";
// import classNames from "classnames";

import { YEARS } from "./RoadMapContent";
import DisplayEvents from "@/components/DisplayEvents";
import displayQuarterlyEvent from "@/helpers/displayQuarterlyEvent";
import ArchLine from "@/assets/icons/arch_line.svg";
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
  ].filter((data) => !!data.content.length);

  const handleYearSelect = (year: number) => {
    setYearSelected(year);
  };
  let total = 160;
  return (
    <div className={styles.RoadMapSection}>
      <div className={styles.Title}>ROADMAP</div>
      <div className={styles.LineBox}>
        <div className={styles.VerticalLine}>&nbsp;</div>
        {yearlyQuarters.map((quarter, i: number) => {
          const isInversed = i % 2 === 0 ? false : true;
          return (
            <DisplayEvents key={i} isInversed={isInversed} quarter={quarter} />
          );
        })}
      </div>
      <div className={styles.YearSelector}>
        <div className={styles.YearsDisplay}>
          {YEARS_ARRAY.map((year, i) => {
            const half = YEARS_ARRAY.length / 2;
            let middle;
            if (YEARS_ARRAY.length % 2 === 0) {
              middle = half;
              console.log("middle 1", middle);
            } else {
              middle = Math.ceil(half);
            }

            const distance = 100 / (middle - 1);
            if (i < middle) {
              total -= distance;
              console.log("distance", distance, "left:", i, total);
            } else {
              total += distance;
              console.log("distance", distance, "rifht:", i, total);
            }
            return (
              <div
                style={{
                  marginTop: `${
                    i < middle ? (total -= distance) : (total += distance)
                  }px`,
                }}
                onClick={() => handleYearSelect(year)}
                className={styles.Year}
                key={i}
              >
                <h3>{year}</h3>
              </div>
            );
          })}
        </div>
        <div className={styles.ArchLine}>
          <ArchLine style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}
export default RoadMap;
