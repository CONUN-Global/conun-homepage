import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { CarouselProvider, Slider, Dot } from "pure-react-carousel";
import useStore from "@/store/store";
import SlideMain from "./SlideMain";

import styles from "./Main.module.scss";

import "pure-react-carousel/dist/react-carousel.es.css";

const MAIN_PAGES = [
  {
    title: "Explore, Share, and Earn with CONUN Drive",
    description:
      "Based on desktop grid computing technology, CONUN&apos;s Distributed Super Computing Platform operates by agreement between participants and users creating a horizontal revenue ecosystem. CONUN collects world PC resources: CPU, GPU, and storage to share amongst network participants.",
    btnMsg: "Learn More",
  },
  {
    title: "Explore, Share, and Earn with CONUN Drive",
    description:
      "Based on desktop grid computing technology, CONUN&apos;s Distributed Super Computing Platform operates by agreement between participants and users creating a horizontal revenue ecosystem. CONUN collects world PC resources: CPU, GPU, and storage to share amongst network participants.",
    btnMsg: "Find out More",
  },
  {
    title: "Your Resource for high power computing",
    description:
      "On our distributed supercomputing platform high power computing is accessible through our P2P ecosystem.",
    btnMsg: "Start Now",
  },
];
function Main() {
  const [size, setSize] = useState({
    height: 10,
    width: 16,
  });

  const activeSlide = useStore((state) => state.activeSlide);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
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
        {MAIN_PAGES.map((page, i) => (
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
    </CarouselProvider>
  );
}
export default Main;
