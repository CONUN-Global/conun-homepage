import { useEffect } from "react";
import { Slide } from "pure-react-carousel";

import Horizontal from "@/components/Card/Horizontal";
import Socials from "@/components/Card/Horizontal/Socials";
import Caption from "@/components/Caption";
import Button from "@/components/Button";

import useCarouselContext from "@/hooks/useCarouselContext";

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
  const setActiveSlide = useStore((state) => state.setActiveSlide);

  useEffect(() => {
    setActiveSlide(currentSlide);
  }, [currentSlide, setActiveSlide]);

  return (
    <Slide innerClassName={styles.SlideContainer} index={index}>
      <Horizontal className={styles.HorizontalCard}>
        <div className={styles.LeftContainer}>
          <Socials />
          <div className={styles.TextContainer}>
            <Caption
              title={title}
              textSize="medium"
              className={styles.Caption}
            />
            <p className={styles.Description}>{description}</p>
            <Button className={styles.Button} round>
              {btnMsg}
            </Button>
          </div>
        </div>

        <div className={styles.RightContainer}>{image}</div>
      </Horizontal>
    </Slide>
  );
}
export default SlideMain;
