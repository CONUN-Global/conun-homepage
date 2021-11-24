import classNames from "classnames";

import styles from "./Vertical.module.scss";

export interface VerticalProps {
  className?: string;
  round?: boolean;
  children?: React.ReactNode;
}
function Vertical({ round, className, children, ...props }: VerticalProps) {
  return (
    <div
      className={classNames(styles.VerticalCard, className, {
        [styles.round]: round,
      })}
      {...props}
    >
      {children}
    </div>
  );
}
export default Vertical;
