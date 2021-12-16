import { DATA } from "./Data";
import Caption from "@/components/Caption";
import Text from "@/components/Text";

import styles from "./TermsAndConditions.module.scss";

function TermsAndConditions() {
  return (
    <div className={styles.TermsAndConditions}>
      <div className={styles.TermsAndConditionsContainer}>
        <div className={styles.Navigation}>
          {DATA.map((content, i: number) => {
            return <Caption key={i} header={content.title} />;
          })}
        </div>
        <div className={styles.TermsAndConditionsContent}>
          <p className={styles.MainTitle}>Temrs and Conditions</p>
          {DATA.map((content, i: number) => {
            return (
              <section key={i} id={content.id}>
                <Caption title={content.title} />
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
