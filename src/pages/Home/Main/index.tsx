import { useEffect, useState } from "react";
import classNames from "classnames";

import { CarouselProvider, Slider, Dot } from "pure-react-carousel";

import SlideMain from "./SlideMain";
import { MAIN_PAGES } from "./SlideMain/SlideContent";
import DownloadBar from "@/components/DownloadBar";

import useStore from "@/store/store";

import styles from "./Main.module.scss";

import "pure-react-carousel/dist/react-carousel.es.css";

function Main() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const activeSlide = useStore((state) => state.activeSlide);
  const slideMap = MAIN_PAGES.slice(0, 4);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <CarouselProvider
      className={styles.Main}
      naturalSlideWidth={size.width}
      naturalSlideHeight={size.height}
      interval={5000}
      totalSlides={4}
      orientation={"horizontal"}
      isPlaying={activeSlide === 3 ? false : true}
      infinite={false}
    >
      <Slider>
        {slideMap.map((page, i) => (
          <SlideMain key={i} page={page} index={i} />
        ))}
      </Slider>
      <div className={styles.Dots}>
        {slideMap.map((page, i) => (
          <Dot
            key={i}
            slide={i}
            className={classNames(styles.Dot, {
              [styles.active]: activeSlide === i,
            })}
          ></Dot>
        ))}
      </div>
      <DownloadBar />
    </CarouselProvider>
  );
}
export default Main;
