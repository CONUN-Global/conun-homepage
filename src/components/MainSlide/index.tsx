import Link from "next/link";
import Horizontal from "@/components/Card/Horizontal";
import Socials from "@/components/Socials";
import Caption from "@/components/Caption";

import useDetectMobile from "@/hooks/useDetectMobile";

import styles from "./MainSlide.module.scss";
import { motion } from "framer-motion";

interface Props {
  caption?: JSX.Element;
  title: JSX.Element;
  description?: JSX.Element;
  image?: JSX.Element;
  btnMsg?: JSX.Element;
  link: string;
}
function MainSlide({ title, description, image, btnMsg, link }: Props) {
  const isMobile = useDetectMobile();

  return (
    <div className={styles.MainSlide}>
      <Horizontal className={styles.HorizontalCard}>
        <div className={styles.TextContainer}>
          {!isMobile && <Socials className={link && styles.SocialButtons} />}
          <div className={styles.TextBox}>
            <Caption
              title={title}
              textSize="large"
              className={styles.Caption}
            />
            <p className={styles.Description}>{description}</p>
            <div className={styles.ButtonContainer}>
              <Link href={link}>
                <a className={styles.Button}>{btnMsg}</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.ImageContainer}>
          <motion.div whileHover={{ scale: 1.05 }}>{image}</motion.div>
        </div>
      </Horizontal>
    </div>
  );
}
export default MainSlide;
