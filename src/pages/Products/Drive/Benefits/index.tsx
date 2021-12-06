import { Trans } from "@lingui/react";

import { Data } from "./Data";

import Caption from "@/components/Caption";
import Text from "@/components/Text";

import styles from "./Benefits.module.scss";

function Benefits() {
  return (
    <div className={styles.Benefits}>
      <div className={styles.BenefitsContainer}>
        <Caption
          className={styles.Caption}
          titleColor="blue"
          textSize="large"
          title={<Trans id="Main Benefits" />}
        />
      </div>
      {Data.map((item, i: number) => {
        return (
          <div key={i} className={styles.TextBox}>
            <div className={styles.Title}>{item.title}</div>
            <Text
              className={styles.Description}
              description={item.description}
            />
          </div>
        );
      })}
    </div>
  );
}
export default Benefits;
