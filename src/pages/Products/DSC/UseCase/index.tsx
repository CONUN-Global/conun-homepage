import { Trans } from "@lingui/macro";
import { USE_CASE_CONTENT } from "./UseCaseCardContent";

import Caption from "@/components/Caption";
import Text from "@/components/Text";
import Vertical from "@/components/Card/Vertical";

import styles from "./UseCase.module.scss";

function UseCase() {
  return (
    <div className={styles.UseCase}>
      <div className={styles.UseCaseContainer}>
        <div className={styles.TextBox}>
          <Caption
            className={styles.Title}
            textSize={"large"}
            title={<Trans id="DSC USE CASES" />}
          />
          <Text
            description={
              <Trans id="Prediction, forecasting, simulation, and advanced calculation -these are all functions that need advanced computing. There are many societal demands that lack physical computing resources or financial means to actuate or process a project." />
            }
          />
        </div>

        <div className={styles.CardContainer}>
          {USE_CASE_CONTENT.map((card, i: number) => {
            return (
              <Vertical key={i} className={styles.UseCaseCard} round>
                <div className={styles.ImageContainer}>{card.image}</div>
                <div className={styles.Text}>
                  <div className={styles.Title}>{card.title}</div>
                  <div className={styles.Description}>{card.description}</div>
                </div>
              </Vertical>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UseCase;
