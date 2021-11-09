import { useEffect } from "react";
import { Slide } from "pure-react-carousel";

import Card, { CardProps } from "@/components/Card";

import useCarouselContext from "@/hooks/useCarouselContext";

import useStore from "@/store/store";

import styles from "./SlideMain.module.scss";

interface SlideMainProps {
  page: CardProps;
  index: number;
}
function SlideMain({ page, index }: SlideMainProps) {
  const currentSlide = useCarouselContext();
  const setActiveSlide = useStore((state) => state.setActiveSlide);

  useEffect(() => {
    setActiveSlide(currentSlide);
  }, [currentSlide, setActiveSlide]);

  return (
    <Slide innerClassName={styles.SlideContainer} index={index}>
      <Card
        socialIcons
        className={styles.Card}
        image={page.image}
        title={page.title}
        description={page.description}
        btnMsg={page.btnMsg}
      ></Card>
    </Slide>
  );
}
export default SlideMain;
