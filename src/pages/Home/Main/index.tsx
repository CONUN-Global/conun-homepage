import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { CarouselProvider, Slider, Dot } from "pure-react-carousel";

import useStore from "@/store/store";
import { Pages } from "@/types/index";

import SlideMain from "./SlideMain";
import { MAIN_PAGES } from "./SlideMain/SlideContent";

import styles from "./Main.module.scss";

import "pure-react-carousel/dist/react-carousel.es.css";

function Main() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const activeSlide = useStore((state) => state.activeSlide);

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
      interval={2000}
      totalSlides={3}
      orientation={"horizontal"}
      isPlaying={activeSlide === 2 ? false : true}
      infinite={false}
    >
      <Slider>
        {MAIN_PAGES.map((page: Pages, i) => (
          <SlideMain key={i} page={page} index={i} />
        ))}
      </Slider>
      <div className={styles.Dots}>
        {MAIN_PAGES.map((page, i) => (
          <Dot
            key={i}
            slide={i}
            className={classNames(styles.Dot, {
              [styles.active]: activeSlide === i,
            })}
          ></Dot>
        ))}
      </div>
      <div className={styles.DownloadBar}>
        <p>Version 1.2.1 of CONUN Drive is now available.</p>
        <Link href="https://dappstore.conun.io/">
          <a target="_blank" className={styles.DownloadLink} rel="noreferrer">
            Download Now
          </a>
        </Link>
      </div>
    </CarouselProvider>
  );
}
export default Main;
