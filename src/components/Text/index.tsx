import classNames from "classnames";

import styles from "./Text.module.scss";

function Text({
  description,
  className,
}: {
  description: JSX.Element;
  className?: string;
}) {
  return (
    <div className={classNames(styles.Text, className)}>{description}</div>
  );
}
export default Text;
