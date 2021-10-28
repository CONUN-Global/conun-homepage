import { useState } from "react";

import Card from "@/components/Card";
import { YEARS } from "./RoadMapContent";
import { YearObj } from "../../../../types/index";

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

  const handleYearSelect = (year: number) => {
    setYearSelected(year);
  };

  return (
    <div className={styles.RoadMapSection}>
      <div className={styles.Title}>ROADMAP</div>
      {getQuarterFour.length > 0 && (
        <div className={styles.Cards}>
          <div className={styles.TitleContainer}>
            <div className={styles.TitleBox}>
              <div>Quarter Four</div>
            </div>
          </div>
          <div className={styles.CardContainer}>
            {getQuarterFour?.map((monthlyEvent: YearObj, i: number) => {
              const { month, title, subtitle } = monthlyEvent;
              return (
                <Card
                  roadMapCard
                  key={i}
                  horizontal
                  round
                  header={month}
                  title={title}
                  description={subtitle}
                />
              );
            })}
          </div>
        </div>
      )}
      {getQuarterThree.length > 0 && (
        <div className={styles.Cards}>
          <div className={styles.TitleContainer}>
            <div className={styles.TitleBox}>
              <div>Quarter Three</div>
            </div>
          </div>
          <div className={styles.CardContainer}>
            {getQuarterThree?.map((monthlyEvent: YearObj, i: number) => {
              const { month, title, subtitle } = monthlyEvent;
              return (
                <Card
                  roadMapCard
                  key={i}
                  round
                  horizontal
                  header={month}
                  title={title}
                  description={subtitle}
                />
              );
            })}
          </div>
        </div>
      )}
      {getQuarterTwo.length > 0 && (
        <div className={styles.Cards}>
          <div className={styles.TitleContainer}>
            <div className={styles.TitleBox}>
              <div>Quarter Two</div>
            </div>
          </div>
          <div className={styles.CardContainer}>
            {getQuarterTwo?.map((monthlyEvent: YearObj, i: number) => {
              const { month, title, subtitle } = monthlyEvent;
              return (
                <Card
                  roadMapCard
                  key={i}
                  horizontal
                  round
                  header={month}
                  title={title}
                  description={subtitle}
                />
              );
            })}
          </div>
        </div>
      )}
      {getQuarterOne.length > 0 && (
        <div className={styles.Cards}>
          <div className={styles.TitleContainer}>
            <div className={styles.TitleBox}>
              <div>Quarter One</div>
            </div>
          </div>
          <div className={styles.CardContainer}>
            {getQuarterOne?.map((monthlyEvent: YearObj, i: number) => {
              const { month, title, subtitle } = monthlyEvent;
              return (
                <Card
                  roadMapCard
                  className={styles.MonthlyEvent}
                  key={i}
                  round
                  horizontal
                  header={month}
                  title={title}
                  description={subtitle}
                />
              );
            })}
          </div>
        </div>
      )}

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
