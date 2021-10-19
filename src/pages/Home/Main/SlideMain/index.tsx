import { useEffect } from "react";
import { Slide } from "pure-react-carousel";
import Link from "next/link";

import useStore from "@/store/store";

import useCarouselContext from "@/hooks/useCarouselContext";

import styles from "./SlideMain.module.scss";
import { Pages } from "@/types/index";
interface SlideMainProps {
  page: Pages;
  index: number;
}
function SlideMain({ page, index }: SlideMainProps) {
  const currentSlide = useCarouselContext();
  const setActiveSlide = useStore((state) => state.setActiveSlide);

  useEffect(() => {
    setActiveSlide(currentSlide);
  }, [currentSlide, setActiveSlide]);

  return (
    <Slide innerClassName={styles.CardContainer} index={index}>
      <div className={styles.Main}>
        <h1 className={styles.Title}>{page.title}</h1>
        <p className={styles.Description}>{page.description}</p>
        <Link href="/#about">
          <a className={styles.LearnMoreButton}>{page.btnMsg}</a>
        </Link>
      </div>
    </Slide>
  );
}
export default SlideMain;
