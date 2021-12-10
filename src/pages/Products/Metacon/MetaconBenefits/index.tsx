import { Trans } from "@lingui/macro";

import Caption from "@/components/Caption";

import styles from "./MetaconBenefits.module.scss";
interface Props {
  iconList: {
    icon: React.ReactNode;
    text: JSX.Element;
  }[];
}

function MetaconBenefits({ iconList }: Props) {
  return (
    <div className={styles.BenefitsCell}>
      <Caption
        title={<Trans id="Metacon Benefits" />}
        className={styles.Title}
      />
      <div className={styles.Icons}>
        {iconList.map((MetaconBenefits, i: number) => {
          return (
            <div key={i} className={styles.IconBox}>
              <div className={styles.Icon}>{MetaconBenefits.icon}</div>
              <p className={styles.Text}>{MetaconBenefits.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MetaconBenefits;
