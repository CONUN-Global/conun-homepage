import Horizontal from "@/components/Card/Horizontal";
import Socials from "@/components/Card/Horizontal/Socials";
import Caption from "@/components/Caption";
import Button from "@/components/Button";

import useDetectMbile from "@/hooks/useDetectMbile";

import styles from "./MainSlide.module.scss";

interface Props {
  caption?: JSX.Element;
  title: JSX.Element;
  description?: JSX.Element;
  image?: JSX.Element;
  btnMsg?: JSX.Element;
}
function MainSlide({ title, description, image, btnMsg }: Props) {
  const isMobile = useDetectMbile();
  return (
    <Horizontal className={styles.HorizontalCard}>
      <div className={styles.TextContainer}>
        {!isMobile && <Socials />}
        <div className={styles.TextBox}>
          <Caption title={title} textSize="large" className={styles.Caption} />
          <p className={styles.Description}>{description}</p>
          <Button className={styles.Button} round>
            {btnMsg}
          </Button>
        </div>
      </div>
      <div className={styles.ImageContainer}>{image}</div>
    </Horizontal>
  );
}
export default MainSlide;
