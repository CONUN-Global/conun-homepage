import React from "react";
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
      naturalSlideWidth={800}
      naturalSlideHeight={800}
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
      {MAIN_PAGES.map((page, i) => (
        <Dot key={i} slide={i}>
          {i}
        </Dot>
      ))}
    </CarouselProvider>
  );
}
export default Main;
