import classNames from "classnames";

import Horizontal from "./Horizontal";
import Caption from "../Caption";

import { MainSlideProps } from "@/types/index";

import styles from "./Card.module.scss";

interface Props {
  card: MainSlideProps;
  index: number;
}
function Card({ card, index }: Props) {
  return (
    <Horizontal
      className={classNames(styles.HorizontalCard, {
        [styles.reversed]: index === 1,
      })}
    >
      <div className={styles.TextContainer}>
        <Caption
          className={styles.Caption}
          header={card.header}
          title={card.title}
        />
        <p className={styles.Description}>{card.description}</p>
      </div>
      <div className={styles.ImageContainer}>{card.image}</div>
    </Horizontal>
  );
}
export default Card;
