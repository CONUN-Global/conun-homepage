import classNames from "classnames";

import styles from "./Caption.module.scss";

export interface CaptionProps {
  header?: JSX.Element;
  title?: JSX.Element;
  className?: string;
  headColor?: "green" | "sky" | "blue";
  titleColor?: "green" | "sky" | "blue";
  textSize?: "small" | "medium" | "large";
}

function Caption({
  header,
  title,
  headColor = "green",
  titleColor = "blue",
  className,
  textSize = "small",
}: CaptionProps) {
  return (
    <div className={classNames(styles.TextContainer, className)}>
      <div className={styles.Header}>
        {!!header && (
          <p
            className={classNames(
              styles.Caption,
              styles[textSize],
              styles[headColor]
            )}
          >
            {header}
          </p>
        )}
        <p
          className={classNames(
            styles.Title,
            styles[textSize],
            styles[textSize],
            styles[titleColor]
          )}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
export default Caption;
