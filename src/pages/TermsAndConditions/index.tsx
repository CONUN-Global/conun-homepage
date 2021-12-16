import { DATA } from "./Data";
import Caption from "@/components/Caption";
import Text from "@/components/Text";

import styles from "./TermsAndConditions.module.scss";

function TermsAndConditions() {
  return (
    <div className={styles.TermsAndConditions}>
      <div className={styles.NavigationContainer}>
        <div className={styles.Navigation}>
          {DATA.map((content, i: number) => {
            return (
              <Caption
                key={i}
                className={styles.NavItems}
                header={content.title}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.TermsAndConditionsContainer}>
        <div className={styles.TermsAndConditContent}>
          <p className={styles.MainTitle}>Temrs and Conditions</p>
          {DATA.map((content, i: number) => {
            return (
              <section key={i} id={content.id}>
                <Caption className={styles.Title} title={content.title} />
                {content.description.map((paragraph, i: number) => {
                  return (
                    <Text
                      key={i}
                      className={styles.Paragraph}
                      description={paragraph}
                    />
                  );
                })}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
