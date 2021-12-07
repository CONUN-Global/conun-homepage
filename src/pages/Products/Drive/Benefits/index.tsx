import { Trans } from "@lingui/react";

import { Data } from "./Data";

import Caption from "@/components/Caption";
import Text from "@/components/Text";

import Drive from "@/assets/icons/drive_computer.svg";
import styles from "./Benefits.module.scss";

function Benefits() {
  return (
    <div className={styles.Benefits}>
      <div className={styles.BenefitsContainer}>
        <Caption
          titleColor="blue"
          textSize="large"
          title={<Trans id="Main Benefits" />}
        />
        <div className={styles.Card}>
          <div className={styles.ChartContainer}>
            <Drive />
          </div>
          <div className={styles.TextContainer}>
            {Data.map((item, i: number) => {
              return (
                <div key={i} className={styles.TextBox}>
                  <Caption
                    className={styles.Title}
                    titleColor="green"
                    textSize="small"
                    title={item.title}
                  />
                  <Text
                    className={styles.Description}
                    description={item.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Benefits;
