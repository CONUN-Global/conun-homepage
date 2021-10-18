import classNames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  noStyle?: boolean;
  variant?: "primary" | "secondary";
  size?: "large" | "medium" | "small";
  round?: boolean;
}

function Button({
  children,
  noStyle,
  className,
  variant = "primary",
  round,
  ...props
}: ButtonProps) {
  if (noStyle) {
    return (
      <button
        className={classNames(styles.noStyleButton, className)}
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
        { [styles.round]: round },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
