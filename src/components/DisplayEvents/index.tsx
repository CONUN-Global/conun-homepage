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
    <div className={isInversed ? styles.InversedCardContainer : styles.Cards}>
      <div
        className={isInversed ? styles.InversedTitle : styles.TitleContainer}
      >
        <div className={styles.TitleBox}>
          <div>{name}</div>
        </div>
      </div>
      <div className={isInversed ? styles.InversedCard : styles.CardContainer}>
        {content?.map((monthlyEvent: YearObj, i: number) => {
          const { month, title, subtitle } = monthlyEvent;

          return (
            <Vertical key={i} className={styles.RoadmapCard} round>
              <Caption color="green" header={month} title={title} />
              <div className={styles.Description}>{subtitle}</div>
            </Vertical>
          );
        })}
      </div>
    </div>
  );
}
export default DisplayEvents;
