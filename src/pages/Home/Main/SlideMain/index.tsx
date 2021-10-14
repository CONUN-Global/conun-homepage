import { Slide } from "pure-react-carousel";

import useStore from "@/store/store";

import useCarouselContext from "@/hooks/useCarouselContext";

import styles from "./SlideMain.module.scss";
import { useEffect } from "react";

function SlideMain() {
  const currentSlide = useCarouselContext();
  //   console.log("currentSlide", currentSlide);
  const setActiveSlide = useStore((state) => state.setActiveSlide);
  //   const activeSlide = useStore((state) => state.activeSlide);

  useEffect(() => {
    setActiveSlide(currentSlide);
  }, [currentSlide, setActiveSlide]);

  return (
    <>
      <Slide innerClassName={styles.CardContainer} index={0}>
        First Page
      </Slide>
      <Slide innerClassName={styles.CardContainer} index={1}>
        second Page
      </Slide>
      <Slide innerClassName={styles.CardContainer} index={2}>
        third Page
      </Slide>
    </>
  );
}
export default SlideMain;
