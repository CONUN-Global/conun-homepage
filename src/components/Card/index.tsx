import classNames from "classnames";

import Socials from "./Socials";

import Button from "@/components/Button";

import styles from "./Card.module.scss";

export interface CardProps {
  title: JSX.Element;
  description?: JSX.Element;
  image?: React.ReactNode;
  children?: React.ReactNode;
  btnMsg?: JSX.Element;
  horizontal?: boolean;
  header?: JSX.Element;
  className?: string;
  round?: boolean;
  roadMapCard?: boolean;
  socialIcons?: boolean;
  color?: "green" | "sky" | "blue";
  textSize?: "small" | "medium" | "large";
}
function Card({
  title,
  description,
  image,
  children,
  btnMsg,
  horizontal,
  header,
  round,
  className,
  roadMapCard,
  socialIcons,
  color = "blue",
  textSize = "small",
  ...props
}: CardProps) {
  if (horizontal) {
    return (
      <div
        className={classNames(
          styles.HorizontalCard,
          className,

          { [styles.round]: round }
        )}
        {...props}
      >
        <div className={styles.IconContainer}>{image}</div>
        <div className={styles.TextContainer}>
          {!!socialIcons && <Socials />}
          <div className={styles.Text}>
            {!!header && (
              <p
                className={classNames(
                  styles.Header,
                  styles[textSize],
                  styles[color]
                )}
              >
                {header}
              </p>
            )}
            <p className={classNames(styles.Title, styles[textSize])}>
              {title}
            </p>
            <p className={classNames(styles.Description, styles[textSize])}>
              {description}
            </p>
            {!!btnMsg && (
              <Button
                className={styles.Button}
                variant="secondary"
                size="small"
                round
              >
                {btnMsg}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={classNames(
        roadMapCard ? styles.RoadMapCard : styles.VerticalCard,
        className,
        {
          [styles.round]: round,
        }
      )}
      {...props}
    >
      {children}
      <div className={styles.TextContainer}>
        {!!header && (
          <p
            className={classNames(
              styles.Header,
              styles[textSize],
              styles[color]
            )}
          >
            {header}
          </p>
        )}
        <p
          className={classNames(styles.Title, styles[textSize], styles[color])}
        >
          {title}
        </p>
        <p
          className={classNames(
            styles.Description,
            styles[textSize],
            styles[color]
          )}
        >
          {description}
        </p>
        {!!btnMsg && (
          <Button variant="primary" size="small" round>
            {btnMsg}
          </Button>
        )}
      </div>
    </div>
  );
}
export default Card;
