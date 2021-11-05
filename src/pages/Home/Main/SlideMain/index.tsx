import { useEffect } from "react";
import { Slide } from "pure-react-carousel";
import Link from "next/link";

import useStore from "@/store/store";
import { Pages } from "@/types/index";

import useCarouselContext from "@/hooks/useCarouselContext";

import Youtube from "@/assets/socials/youtube.svg";
import Facebook from "@/assets/socials/facebook.svg";
import Linkedin from "@/assets/socials/linkedin.svg";
import Github from "@/assets/socials/github.svg";
import Discord from "@/assets/socials/discord.svg";
import Medium from "@/assets/socials/medium.svg";
import styles from "./SlideMain.module.scss";

interface SlideMainProps {
  page: Pages;
  index: number;
}
function SlideMain({ page, index }: SlideMainProps) {
  const currentSlide = useCarouselContext();
  const setActiveSlide = useStore((state) => state.setActiveSlide);

  useEffect(() => {
    setActiveSlide(currentSlide);
  }, [currentSlide, setActiveSlide]);

  return (
    <Slide innerClassName={styles.SlideContainer} index={index}>
      <div className={styles.Slides}>
        <div className={styles.SocialIconContainer}>
          <Youtube className={styles.SocialIcon} />
          <Facebook className={styles.SocialIcon} />
          <Linkedin className={styles.SocialIcon} />
          <Github className={styles.SocialIcon} />
          <Discord className={styles.SocialIcon} />
          <Medium className={styles.SocialIcon} />
        </div>
        <div className={styles.Main}>
          <h1 className={styles.Title}>{page.title}</h1>
          <p className={styles.Description}>{page.description}</p>
          <Link href="/#about">
            <a className={styles.LearnMoreButton}>{page.btnMsg}</a>
          </Link>
        </div>
        <div className={styles.Spacers}></div>
        <div className={styles.IconContainer}>{page.bgIcon}</div>
      </div>
    </Slide>
  );
}
export default SlideMain;
