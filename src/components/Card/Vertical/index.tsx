import classNames from "classnames";

// import Button from "@/components/Button";

import styles from "./Vertical.module.scss";

export interface VerticalProps {
  className?: string;
  round?: boolean;
  // image?: React.ReactNode;
  children?: React.ReactNode;
  // header?: JSX.Element;
  // btnMsg?: JSX.Element;
  // socialIcons?: boolean;
  // title: JSX.Element;
  // description?: JSX.Element;
  // color?: "green" | "sky" | "blue";
  // textSize?: "small" | "medium" | "large";
}
function Vertical({
  round,
  // title,
  // description,
  className,
  children,
  // header,
  // btnMsg,
  // color,
  // textSize,
  ...props
}: VerticalProps) {
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
