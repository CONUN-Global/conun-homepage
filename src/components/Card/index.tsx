import classNames from "classnames";
import Image from "next/image";

import Socials from "./Socials";
import Button from "@/components/Button";

import styles from "./Card.module.scss";

export interface CardProps {
  id?: string;
  title: JSX.Element;
  description?: JSX.Element;
  image?: React.ReactNode;
  children?: React.ReactNode;
  btnMsg?: JSX.Element;
  vertical?: boolean;
  header?: JSX.Element;
  className?: string;
  round?: boolean;
  roadMapCard?: boolean;
  srcImg?: string;
  socialIcons?: boolean;
}
function Card({
  title,
  description,
  image,
  btnMsg,
  vertical,
  header,
  srcImg,
  round,
  className,
  roadMapCard,
  socialIcons,
  ...props
}: CardProps) {
  if (vertical) {
    return (
      <div
        className={classNames(styles.VerticalCard, className, {
          [styles.round]: round,
        })}
        {...props}
      >
        {!!srcImg && (
          <Image src={srcImg} className={styles.SrcImage} alt="conun news" />
        )}
        {!!image && <div className={styles.IconContainer}>{image}</div>}

        <div
          className={classNames(styles.TextContainer, {
            [styles.srcImg]: srcImg,
          })}
        >
          {!!header && <p className={styles.Header}>{header}</p>}
          <h3 className={styles.Title}>{title}</h3>
          <p className={styles.Description}>{description}</p>
          {!!btnMsg && (
            <Button variant="primary" size="small" round>
              {btnMsg}
            </Button>
          )}
        </div>
      </div>
    );
  }
  return (
    <div
      className={classNames(
        roadMapCard ? styles.RoadMapCard : styles.HorizontalCard,
        className,

        { [styles.round]: round }
      )}
      {...props}
    >
      <div className={styles.IconContainer}>{image}</div>
      <div className={styles.TextContainer}>
        {!!socialIcons && <Socials />}
        <div className={styles.Text}>
          {!!header && <p className={styles.Header}>{header}</p>}
          <h3 className={styles.Title}>{title}</h3>
          <p className={styles.Description}>{description}</p>
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
export default Card;
