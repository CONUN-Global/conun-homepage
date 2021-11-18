import classNames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  noStyle?: boolean;
  variant?: "primary" | "secondary";
  size?: "large" | "medium" | "small";
  textSize?: "textLarge" | "textMedium" | "textSmall";
  round?: boolean;
  margin?: boolean;
}

function Button({
  children,
  noStyle,
  className,
  variant = "secondary",
  size = "small",
  textSize = "textSmall",
  round,
  margin,
  ...props
}: ButtonProps) {
  if (noStyle) {
    return (
      <button
        className={classNames(styles.NoStyleButton, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={classNames(
        styles.Button,
        className,
        styles[variant],
        styles[size],
        styles[textSize],

        { [styles.round]: round, [styles.margin]: margin },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
