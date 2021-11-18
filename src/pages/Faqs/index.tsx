import { QNAS } from "./QnAs";
import styles from "./Faqs.module.scss";

function Faqs() {
  return (
    <div className={styles.FaqsPage}>
      <h1>Frequently asked questions</h1>
      <p>Answers to commonly asked questions regarding CONUN.</p>
      <div className={styles.FaqsContainer}>
        {QNAS.map((qna, i: number) => {
          return (
            <div key={i} className={styles.QnABox}>
              <div className={styles.QuestionBox}>
                <p>{qna.question}</p>
              </div>
              <div className={styles.AnswerBox}>
                <p>{qna.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faqs;
