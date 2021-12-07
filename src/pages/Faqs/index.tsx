import { Trans } from "@lingui/macro";
import { QNAS } from "./QnAs";
import SimpleCard from "@/components/SimpleCard";
import styles from "./Faqs.module.scss";

function Faqs() {
  return (
    <div className={styles.FaqsPage}>
      <div className={styles.FaqsPageContainer}>
        <p className={styles.Title}>
          Frequently
          <br />
          asked
          <br /> questions
        </p>
        <p className={styles.Description}>
          <Trans id="Answers to commonly asked questions regarding CONUN." />
        </p>
        <div className={styles.FaqsContainer}>
          {QNAS.map((qna, i: number) => {
            return <SimpleCard key={i} data={qna} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
