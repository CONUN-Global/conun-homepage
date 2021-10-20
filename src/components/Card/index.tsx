import { Trans } from "@lingui/macro";
import Button from "@/components/Button";
import styles from "./Card.module.scss";

export interface CardProps {
  title: string;
  description: string;
  image?: React.ReactNode;
  btnMsg?: React.ReactNode;
  noStyle?: boolean;
}
function Card(card: CardProps) {
  const { title, description, image, btnMsg } = card;
  {
    return (
      <div>
        <div className={styles.Icon}>{image}</div>
        <h3>
          <Trans id={title} />
        </h3>
        <p>
          <Trans id={description} />
        </p>
        <Button>{btnMsg}</Button>
      </div>
    );
  }
}
export default Card;
