import { Trans } from "@lingui/macro";
import Button from "@/components/Button";
import styles from "./Card.module.scss";

export interface CardProps {
  title: string;
  description: string;
  image?: React.ReactNode;
  btnMsg?: string;
  horizontal?: boolean;
  header?: string;
  className?: string;
}
function Card({
  title,
  description,
  image,
  btnMsg,
  horizontal,
  header,
  ...props
}: CardProps) {
  if (horizontal) {
    return (
      <div className={styles.NoStyleCard} {...props}>
        <div className={styles.IconContainer}>{image}</div>
        <div className={styles.TextContainer}>
          {header && <p>{header}</p>}
          <h3 className={styles.Title}>
            <Trans id={title} />
          </h3>
          <p className={styles.Description}>
            <Trans id={description} />
          </p>
          <Button>{btnMsg}</Button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.Card} {...props}>
      <div className={styles.IconContainer}>{image}</div>
      <h3 className={styles.Title}>
        <Trans id={title} />
      </h3>
      <p className={styles.Description}>
        <Trans id={description} />
      </p>
      <Button variant={"primary"} round>
        {btnMsg}
      </Button>
    </div>
  );
}
export default Card;
