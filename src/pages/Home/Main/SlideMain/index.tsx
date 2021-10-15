import { useEffect } from "react";

import Link from "next/link";
import { Slide } from "pure-react-carousel";

import useStore from "@/store/store";

import useCarouselContext from "@/hooks/useCarouselContext";

import styles from "./SlideMain.module.scss";
interface SlideMainProps {
  page: {
    title: string;
    description: string;
    btnMsg: string;
  };
  index: number;
}
function SlideMain({ page, index }: SlideMainProps) {
  const currentSlide = useCarouselContext();
  //   console.log("currentSlide", currentSlide);
  const setActiveSlide = useStore((state) => state.setActiveSlide);
  //   const activeSlide = useStore((state) => state.activeSlide);

  useEffect(() => {
    setActiveSlide(currentSlide);
  }, [currentSlide, setActiveSlide]);

  return (
    <Slide innerClassName={styles.CardContainer} index={index}>
      <h1 className={styles.Title}>{page.title}sssss</h1>
      <p className={styles.Description}>{page.description}</p>
      <Link href="/#about">
        <a className={styles.LearnMoreButton}>{page.btnMsg}</a>
      </Link>
    </Slide>
  );
}
export default SlideMain;
