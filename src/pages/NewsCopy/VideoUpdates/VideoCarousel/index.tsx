import React from "react";
import classNames from "classnames";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slider,
} from "pure-react-carousel";

import VideoSlide from "./VideoSlide";

import LeftIcon from "@/assets/icons/Carousel_Arrow_Left.svg";
import RightIcon from "@/assets/icons/Carousel_Arrow_Right.svg";

import styles from "./VideoCarousel.module.scss";
import "pure-react-carousel/dist/react-carousel.es.css";

import { NewsDataObj } from "@/types/index";

import data from "../../newsData.json";

const videoData = data.filter((news) => news.source === "youtube");
import { useState, useEffect } from "react";

function VideoCarousel() {
  const [visibleSlideCount, setVisibleSlideCount] = useState(3);

  function handleResize() {
    if (window.innerWidth > 1200) {
      setVisibleSlideCount(3);
    } else if (window.innerWidth < 1200 && window.innerWidth > 800) {
      setVisibleSlideCount(2);
    } else if (window.innerWidth < 800) {
      setVisibleSlideCount(1);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={280}
        naturalSlideHeight={300}
        totalSlides={videoData.length}
        visibleSlides={visibleSlideCount}
        className={styles.VideoCarousel}
      >
        <Slider className={styles.Slider}>
          {videoData.map((news: NewsDataObj, i: number) => (
            <VideoSlide key={news.id} slideIndex={i} newsData={news} />
          ))}
        </Slider>
        {visibleSlideCount > 0 && (
          <div>
            <ButtonBack className={classNames(styles.Button, styles.BackBtn)}>
              <LeftIcon />
            </ButtonBack>
            <ButtonNext className={classNames(styles.Button, styles.NextBtn)}>
              <RightIcon />
            </ButtonNext>
          </div>
        )}
      </CarouselProvider>
    </div>
  );
}

export default VideoCarousel;
