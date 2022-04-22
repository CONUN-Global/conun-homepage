import classNames from "classnames";
import { YearObj } from "@/types/index";

import Vertical from "@/components/Card/Vertical";
import Caption from "@/components/Caption";

import styles from "./DisplayEvents.module.scss";

export interface DisplayEventsProps {
  quarter: {
    name: string;
    content: any[];
  };
  isInversed: boolean;
}

function DisplayEvents({
  quarter: { name, content },
  isInversed,
}: DisplayEventsProps) {
  return (
    <div
      className={classNames(styles.Cards, { [styles.inversed]: isInversed })}
    >
      <div
        className={classNames(styles.TitleContainer, {
          [styles.inversed]: isInversed,
        })}
      >
        <div className={styles.TitleBox}>
          <div
            className={classNames(styles.Year, {
              [styles.inversed]: isInversed,
            })}
          >
            {name}
          </div>
        </div>
      </div>
      <div
        className={classNames(styles.CardContainer, {
          [styles.inversed]: isInversed,
        })}
      >
        {content?.map((monthlyEvent: YearObj, i: number) => {
          const { month, title, subtitle } = monthlyEvent;

          return (
            <Vertical
              key={i}
              className={classNames(styles.RoadmapCard, {
                [styles.inversed]: isInversed,
              })}
              round
            >
              <Caption
                titleColor="green"
                headColor="green"
                header={month}
                title={title}
              />
              <div className={styles.Description}>{subtitle}</div>
            </Vertical>
          );
        })}
      </div>
    </div>
  );
}
export default DisplayEvents;
