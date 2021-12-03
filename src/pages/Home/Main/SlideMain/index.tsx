import { useEffect } from "react";
import { Slide } from "pure-react-carousel";

import MainSlide from "@/components/MainSlide";

import useCarouselContext from "@/hooks/useCarouselContext";

import useStore from "@/store/store";

interface SlideMainProps {
  page: {
    caption?: JSX.Element;
    title: JSX.Element;
    description?: JSX.Element;
    image?: JSX.Element;
    btnMsg?: JSX.Element;
    link: string;
  };
  index: number;
}
function SlideMain({
  page: { title, description, image, btnMsg, link },
  index,
}: SlideMainProps) {
  const currentSlide = useCarouselContext();

  const setActiveSlide = useStore((state) => state.setActiveSlide);

  useEffect(() => {
    setActiveSlide(currentSlide);
  }, [currentSlide, setActiveSlide]);

  return (
    <Slide index={index}>
      <MainSlide
        title={title}
        description={description}
        image={image}
        link={link}
        btnMsg={btnMsg}
      />
    </Slide>
  );
}
export default SlideMain;
