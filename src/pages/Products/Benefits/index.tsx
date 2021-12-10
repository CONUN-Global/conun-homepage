import { Trans } from "@lingui/macro";

import Caption from "@/components/Caption";

import styles from "./Benefits.module.scss";
interface Props {
  iconList: {
    icon: React.ReactNode;
    text: JSX.Element;
  }[];
}

function Benefits({ iconList }: Props) {
  return (
    <div className={styles.IconContainer}>
      <Caption title={<Trans id="Benefits" />} className={styles.Title} />
      <div className={styles.Icons}>
        {iconList.map((benefits, i: number) => {
          return (
            <div key={i} className={styles.IconBox}>
              <div className={styles.Icon}>{benefits.icon}</div>
              <p className={styles.Text}>{benefits.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Benefits;
