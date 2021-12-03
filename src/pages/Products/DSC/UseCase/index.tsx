import { USE_CASE_CONTENT } from "./UseCaseCardContent";

import Vertical from "@/components/Card/Vertical";

import styles from "./UseCase.module.scss";

function UseCase() {
  return (
    <div className={styles.UseCase}>
      <div className={styles.UseCaseContainer}>
        <div className={styles.TextBox}>
          <p className={styles.Title}>DSC USE CASES</p>
          <p>
            Prediction, forecasting, simulation, and advanced calculation -
            these are all functions that need advanced computing. There are many
            societal demands that lack physical computing resources or financial
            means to actuate or process a project.
          </p>
        </div>

        <div className={styles.CardContainer}>
          {USE_CASE_CONTENT.map((card, i: number) => {
            return (
              <Vertical key={i} className={styles.UseCaseCard} round>
                <div className={styles.ImageContainer}>
                  <div className={styles.Image}>{card.image}</div>
                  <div className={styles.Text}>{card.title}</div>
                </div>

                <div className={styles.Description}>{card.description}</div>
              </Vertical>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UseCase;
