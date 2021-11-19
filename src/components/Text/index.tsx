import classNames from "classnames";

import styles from "./Text.module.scss";

export interface TextProps {
  caption?: JSX.Element;
  title: JSX.Element;
  description?: JSX.Element;
  btnMsg?: JSX.Element;
  className?: string;
  color?: "green" | "sky";
  textSize?: "small" | "medium" | "large";
}

function Text({
  caption,
  title,
  description,
  className,
  textSize = "small",
}: TextProps) {
  return (
    <div className={classNames(styles.TextContainer, className)}>
      <div className={styles.Header}>
        {!!caption && (
          <p className={classNames(styles.Caption, styles[textSize])}>
            {caption}
          </p>
        )}
        <p className={classNames(styles.Title, styles[textSize])}>{title}</p>
      </div>
      <p className={classNames(styles.Description, styles[textSize])}>
        {description}
      </p>
    </div>
  );
}
export default Text;
