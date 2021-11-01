import classNames from "classnames";
import Button from "@/components/Button";
import styles from "./Card.module.scss";

export interface CardProps {
  id?: string;
  title: JSX.Element;
  description?: JSX.Element;
  image?: React.ReactNode;
  children?: React.ReactNode;
  btnMsg?: JSX.Element;
  horizontal?: boolean;
  header?: JSX.Element;
  className?: string;
  border?: boolean;
  round?: boolean;
  roadMapCard?: boolean;
  size?: "large" | "medium" | "small";
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
  children,
  className,
  size = "medium",
  roadMapCard,
  ...props
}: CardProps) {
  if (horizontal) {
    return (
      <div
        className={classNames(
          roadMapCard ? styles.RoadMapCard : styles.HorizontalCard,
          className,
          styles[size],
          {
            [styles.border]: border,
            [styles.round]: round,
          }
        )}
        {...props}
      >
        <div className={styles.IconContainer}>{image}</div>
        <div className={styles.TextContainer}>
          {!!header && <p className={styles.Header}>{header}</p>}
          <h3 className={styles.Title}>{title}</h3>
          <p className={styles.Description}>{description}</p>
          {!!btnMsg && (
            <Button
              className={styles.Button}
              variant="primary"
              size="small"
              round
            >
              {btnMsg}
            </Button>
          )}
        </div>
      </div>
    );
  }
  return (
    <div
      className={classNames(styles.VerticalCard, className, styles[size], {
        [styles.round]: round,
      })}
      {...props}
    >
      {children}
      {!!image && <div className={styles.IconContainer}>{image}</div>}
      {!!header && <p className={styles.Header}>{header}</p>}
      <h3 className={styles.Title}>{title}</h3>
      <p className={styles.Description}>{description}</p>
      {!!btnMsg && (
        <Button variant="primary" size="small" round>
          {btnMsg}
        </Button>
      )}
    </div>
  );
}
export default Card;
