import Horizontal from "@/components/Card/Vertical";
import Socials from "@/components/Socials";
import Caption from "@/components/Caption";
import Text from "@/components/Text";

import useDetectMobile from "@/hooks/useDetectMobile";

import styles from "./CustomHeader.module.scss";

interface Props {
  title: JSX.Element;
  description: JSX.Element;
  image: React.ReactNode;
}
function CustomHeader({ title, description, image }: Props) {
  const isMobile = useDetectMobile();
  return (
    <Horizontal className={styles.VerticalCard}>
      {!isMobile && (
        <div className={styles.SocialContainer}>
          <Socials className={styles.SocialButtons} />
        </div>
      )}

      <div className={styles.CardContainer}>
        <div className={styles.TextBox}>
          <Caption title={title} textSize="large" className={styles.Caption} />
          <Text className={styles.Description} description={description} />
        </div>
        <div className={styles.ImageContainer}>{image}</div>
        {isMobile && (
          <div className={styles.SocialContainer}>
            <Socials alignment="horizontal" className={styles.SocialButtons} />
          </div>
        )}
      </div>
    </Horizontal>
  );
}
export default CustomHeader;
