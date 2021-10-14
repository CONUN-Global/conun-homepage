import React from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import useStore from "@/store/store";
import SlideMain from "./SlideMain";

import styles from "./Main.module.scss";

import "pure-react-carousel/dist/react-carousel.es.css";

function Main() {
  //   const ref = useRef<HTMLDivElement>(null);
  //   const [windowWidth, setWindowWidth] = useState(0);
  //   const [windowHeight, setWindowHeight] = useState(0);
  const activeSlide = useStore((state) => state.activeSlide);

  //   useEffect(() => {
  //     if (ref) {
  //       console.log("ref size", ref.current?.offsetWidth || 0);
  //       console.log("ref size", ref.current?.offsetHeight || 0);
  //       setWindowWidth(ref.current?.offsetWidth || 0);
  //       setWindowHeight(ref.current?.offsetHeight || 0);
  //     }
  //   }, [ref]);

  return (
    // <div ref={ref} className={styles.Main}>
    <CarouselProvider
      className={styles.Main}
      naturalSlideWidth={1200}
      naturalSlideHeight={800}
      interval={5000}
      totalSlides={3}
      orientation={"horizontal"}
      isPlaying={true}
    >
      <Slider>
        <SlideMain />
      </Slider>
      {activeSlide}
    </CarouselProvider>
    // </div>

    // <div className={styles.Main}>
    //   <h1 className={styles.Title}>
    //     Explore, Share, and Earn with CONUN Drive
    //   </h1>
    //   <p className={styles.Description}>
    //     Based on desktop grid computing technology, CONUN&apos;s Distributed
    //     Super Computing Platform operates by agreement between participants and
    //     users creating a horizontal revenue ecosystem. CONUN collects world PC
    //     resources: CPU, GPU, and storage to share amongst network participants.
    //   </p>
    //   <Link href="/#about">
    //     <a className={styles.LearnMoreButton}>Learn More</a>
    //   </Link>
    // </div>
  );
}
export default Main;
