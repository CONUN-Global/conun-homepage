import classNames from "classnames";

import styles from "./Horizontal.module.scss";

export interface HorizontalProps {
  className?: string;
  round?: boolean;
  children?: React.ReactNode;
}

function Horizontal({ className, round, children, ...props }: HorizontalProps) {
  return (
    <div
      className={classNames(
        styles.HorizontalCard,
        className,

        { [styles.round]: round }
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Horizontal;
