import { useEffect } from "react";
import { Slide } from "pure-react-carousel";

import Horizontal from "@/components/Card/Horizontal";
import Socials from "@/components/Card/Horizontal/Socials";
import Caption from "@/components/Caption";
import Button from "@/components/Button";

import useCarouselContext from "@/hooks/useCarouselContext";
import useDetactMobile from "@/hooks/useDetactMobile";

import useStore from "@/store/store";

import styles from "./SlideMain.module.scss";

interface SlideMainProps {
  page: {
    caption?: JSX.Element;
    title: JSX.Element;
    description?: JSX.Element;
    image?: JSX.Element;
    btnMsg?: JSX.Element;
  };
  index: number;
}
function SlideMain({
  page: { title, description, image, btnMsg },
  index,
}: SlideMainProps) {
  const currentSlide = useCarouselContext();
  const isMobile = useDetactMobile();

  const setActiveSlide = useStore((state) => state.setActiveSlide);

  useEffect(() => {
    setActiveSlide(currentSlide);
  }, [currentSlide, setActiveSlide]);

  return (
    <Slide innerClassName={styles.SlideContainer} index={index}>
      <Horizontal className={styles.HorizontalCard}>
        <div className={styles.TextContainer}>
          {!isMobile && <Socials />}
          <div className={styles.TextBox}>
            <Caption
              title={title}
              textSize="large"
              className={styles.Caption}
            />
            <p className={styles.Description}>{description}</p>
            <Button className={styles.Button} round>
              {btnMsg}
            </Button>
          </div>
        </div>
        <div className={styles.ImageContainer}>{image}</div>
      </Horizontal>
    </Slide>
  );
}
export default SlideMain;
