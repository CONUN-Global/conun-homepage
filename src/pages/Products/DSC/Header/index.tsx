import { MAIN_PAGES } from "../../../Home/Main/SlideMain/SlideContent";

import CustomHeader from "../../CustomHeader";

function Header() {
  const { title, description, image } = MAIN_PAGES[0];
  return <CustomHeader title={title} description={description} image={image} />;
}
export default Header;
