import { Trans } from "@lingui/macro";
import Button from "@/components/Button";
import styles from "./Card.module.scss";
import classNames from "classnames";

export interface CardProps {
  id?: string;
  title: string;
  description: string;
  image?: React.ReactNode;
  btnMsg?: string;
  horizontal?: boolean;
  header?: string;
  className?: string;
  border?: boolean;
  round?: boolean;
}
function Card({
  title,
  description,
  image,
  btnMsg,
  horizontal,
  header,
  border,
  round,
  className,
  ...props
}: CardProps) {
  if (horizontal) {
    return (
      <div
        className={classNames(styles.HorizontalCard, className, {
          [styles.border]: border,
          [styles.round]: round,
        })}
        {...props}
      >
        <div className={styles.IconContainer}>{image}</div>
        <div className={styles.TextContainer}>
          {header && <p className={styles.Header}>{header}</p>}
          <h3 className={styles.Title}>
            <Trans id={title} />
          </h3>
          <p className={styles.Description}>
            <Trans id={description} />
          </p>
          <Button
            className={styles.Button}
            variant="primary"
            size="small"
            round
          >
            {btnMsg}
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className={classNames(styles.VerticalCard, className)} {...props}>
      <div className={styles.IconContainer}>{image}</div>
      <h3 className={styles.Title}>
        <Trans id={title} />
      </h3>
      <p className={styles.Description}>
        <Trans id={description} />
      </p>
      <Button variant="primary" size="small" round>
        {btnMsg}
      </Button>
    </div>
  );
}
export default Card;
