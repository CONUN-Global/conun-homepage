import Card from "@/components/Card";
import { YearObj } from "@/types/index";
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
            <Card
              roadMapCard
              key={i}
              horizontal
              className={styles.RoadmapCard}
              round
              header={month.props.id}
              title={title.props.id}
              description={subtitle?.props.id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default DisplayEvents;
