import { Trans } from "@lingui/macro";
import { MAIN_PAGES } from "../../../Home/Main/SlideMain/SlideContent";
import MainSlide from "@/components/MainSlide";

function Header() {
  const { title, description, image } = MAIN_PAGES[1];
  return (
    <MainSlide
      title={title}
      description={description}
      image={image}
      btnMsg={<Trans id="Download" />}
      link="../download"
    />
  );
}
export default Header;
