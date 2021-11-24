import classNames from "classnames";

import styles from "./Caption.module.scss";

export interface CaptionProps {
  header?: JSX.Element;
  title: JSX.Element;
  className?: string;
  color?: "green" | "sky" | "blue";
  textSize?: "small" | "medium" | "costume";
}

function Caption({
  header,
  title,
  className,
  color = "sky",
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
      </div>
    </div>
  );
}
export default Caption;
