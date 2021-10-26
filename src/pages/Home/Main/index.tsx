import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { CarouselProvider, Slider, Dot } from "pure-react-carousel";
import { Trans } from "@lingui/react";

import useStore from "@/store/store";
import { Pages } from "@/types/index";

import SlideMain from "./SlideMain";

import styles from "./Main.module.scss";

import "pure-react-carousel/dist/react-carousel.es.css";

const MAIN_PAGES = [
  {
    title: <Trans id="Explore, Share, and Earn with CONUN Drive" />,
    description: (
      <Trans id="Based on desktop grid computing technology, CONUN's Distributed Super Computing Platform operates by agreement between participants and users creating a horizontal revenue ecosystem. CONUN collects world PC resources: CPU, GPU, and storage to share amongst network participants." />
    ),
    btnMsg: <Trans id="Learn More" />,
  },
  {
    title: <Trans id="Explore, Share, and Earn with CONUN Drive" />,
    description: (
      <Trans id="Based on desktop grid computing technology, CONUN's Distributed Super Computing Platform operates by agreement between participants and users creating a horizontal revenue ecosystem. CONUN collects world PC resources: CPU, GPU, and storage to share amongst network participants." />
    ),
    btnMsg: <Trans id="Find out More" />,
  },
  {
    title: <Trans id="Your Resource for high power computing" />,
    description: (
      <Trans id="Based on desktop grid computing technology, CONUN's Distributed Super Computing Platform operates by agreement between participants and users creating a horizontal revenue ecosystem. CONUN collects world PC resources: CPU, GPU, and storage to share amongst network participants." />
    ),
    btnMsg: <Trans id="Start Now" />,
  },
];
function Main() {
  const [size, setSize] = useState({
    height: 9,
    width: 18,
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
