import { MAIN_PAGES } from "../../../Home/Main/SlideMain/SlideContent";
import MainSlide from "@/components/MainSlide";

import styles from "./Header.module.scss";

function Header() {
  const { title, description, image, btnMsg } = MAIN_PAGES[0];
  return (
    <div className={styles.Header}>
      <MainSlide
        title={title}
        description={description}
        image={image}
        btnMsg={btnMsg}
      />
    </div>
  );
}
export default Header;
