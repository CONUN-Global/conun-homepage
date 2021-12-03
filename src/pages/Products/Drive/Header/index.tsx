import { MAIN_PAGES } from "../../../Home/Main/SlideMain/SlideContent";
import MainSlide from "@/components/MainSlide";

function Header() {
  const { title, description, image, btnMsg } = MAIN_PAGES[2];
  return (
    <MainSlide
      title={title}
      description={description}
      image={image}
      btnMsg={btnMsg}
    />
  );
}
export default Header;
