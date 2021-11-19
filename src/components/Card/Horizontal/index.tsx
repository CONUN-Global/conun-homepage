import classNames from "classnames";

import Socials from "./Socials";

import Button from "@/components/Button";

import styles from "./Horizontal.module.scss";

export interface HorizontalProps {
  className?: string;
  round?: boolean;
  image?: React.ReactNode;
  children?: React.ReactNode;
  header?: JSX.Element;
  btnMsg?: JSX.Element;
  socialIcons?: boolean;
  title: JSX.Element;
  description?: JSX.Element;
  color?: "green" | "sky" | "blue";
  textSize?: "small" | "medium" | "large";
}

function Horizontal({
  className,
  round,
  image,
  btnMsg,
  header,
  socialIcons,
  color,
  textSize,
  title,
  description,
  ...props
}: HorizontalProps) {
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
        {socialIcons && <Socials />}
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
          <p className={classNames(styles.Title, styles[textSize])}>{title}</p>
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

export default Horizontal;
