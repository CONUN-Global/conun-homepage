import { Trans } from "@lingui/macro";
import { useState } from "react";
import { useRouter } from "next/router";

import { YEARS } from "./RoadMapContent";

import DisplayEvents from "@/components/DisplayEvents";

import useDetectMobile from "@/hooks/useDetectMobile";

import makeArc from "@/helpers/makeArc";
import displayQuarterlyEvent from "@/helpers/displayQuarterlyEvent";

import ArchLine from "@/assets/icons/arch_line.svg";

import styles from "./RoadMapSection.module.scss";
import classNames from "classnames";

const FIRST = ["Jan", "Feb", "Mar"];
const SECOND = ["Apr", "May", "Jun"];
const THIRD = ["Jul", "Aug", "Sep"];
const FOURTH = ["Oct", "Nov", "Dec"];

const YEARS_ARRAY = [2017, 2018, 2019, 2020, 2021, 2022, 2023];

function RoadMap() {
  const router = useRouter();
  const current = new Date();
  const currentYear = current.getFullYear();
  const isMobile = useDetectMobile();
  const [yearSelected, setYearSelected] = useState(currentYear);
  const getQuarterFour = displayQuarterlyEvent(YEARS[yearSelected], FOURTH);
  const getQuarterThree = displayQuarterlyEvent(YEARS[yearSelected], THIRD);
  const getQuarterTwo = displayQuarterlyEvent(YEARS[yearSelected], SECOND);
  const getQuarterOne = displayQuarterlyEvent(YEARS[yearSelected], FIRST);

  const getArch = makeArc(YEARS_ARRAY);
  const yearlyQuarters = [
    { name: "Quarter Four", content: getQuarterFour },
    { name: "Quarter Three", content: getQuarterThree },
    { name: "Quarter Two", content: getQuarterTwo },
    { name: "Quarter One", content: getQuarterOne },
  ].filter((data) => !!data.content.length);

  const handleYearSelect = (year: number) => {
    setYearSelected(year);
    router.replace("/#roadmap");
  };

  return (
    <section id="roadmap" className={styles.RoadMapSection}>
      <div className={styles.TitleBox}>
        <p className={styles.Title}>
          <Trans id="ROADMAP" />
        </p>
      </div>
      <div className={styles.LineBox}>
        <div className={styles.VerticalLine}>&nbsp;</div>
        {yearlyQuarters.map((quarter, i: number) => {
          const isInversed = i % 2 === 0 ? false : true;
          return (
            <DisplayEvents key={i} isInversed={isInversed} quarter={quarter} />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div className={styles.YearSelector}>
          {getArch.map((a, i: number) => {
            const { top, left, year } = a;
            return (
              <div
                key={i}
                onClick={() => handleYearSelect(year)}
                className={classNames(styles.Year, {
                  [styles.selected]: year === yearSelected,
                })}
                style={
                  isMobile
                    ? { position: "relative", width: "100%" }
                    : {
                        position: "absolute",
                        top: top + "%",
                        left: left + "%",
                      }
                }
              >
                {year}
              </div>
            );
          })}

          <div className={styles.ArchLine}>
            <ArchLine style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default RoadMap;
