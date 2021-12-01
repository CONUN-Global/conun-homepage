import React from "react";
import classNames from "classnames";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slider,
} from "pure-react-carousel";

import VideoSlide from "./VideoSlide";

import Left from "@/assets/icons/carousel-arrow-left.svg";
import Right from "@/assets/icons/carousel-arrow-right.svg";

import styles from "./VideoCarousel.module.scss";
import "pure-react-carousel/dist/react-carousel.es.css";

import { NewsDataObj } from "@/types/index";
// dummy data
import data from "../../newsData.json";

const placeholderIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function VideoCarousel() {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={320}
        naturalSlideHeight={300}
        totalSlides={placeholderIndex.length}
        visibleSlides={3}
        className={styles.VideoCarousel}
      >
        <Slider className={styles.Slider}>
          {data.map((news: NewsDataObj, i: number) => (
            <VideoSlide key={news.id} slideIndex={i} newsData={news} />
          ))}
        </Slider>
        <ButtonBack className={classNames(styles.Button, styles.BackBtn)}>
          <Left />
        </ButtonBack>
        <ButtonNext className={classNames(styles.Button, styles.NextBtn)}>
          <Right />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}

export default VideoCarousel;
