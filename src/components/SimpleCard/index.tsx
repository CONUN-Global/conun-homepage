import React, { useState } from "react";
import styles from "./SimpleCard.module.scss";

export interface SimpleCardProps {
  data: {
    question?: JSX.Element;
    answer?: JSX.Element;
  };
}
function SimpleCard({ data }: SimpleCardProps) {
  const [isQuestionBoxOpen, setQuestionBox] = useState(false);

  return (
    <div className={styles.QnABox}>
      <div
        className={styles.QuestionBox}
        onClick={() => setQuestionBox((prev) => !prev)}
      >
        <p>{data.question}</p>
        <div className={styles.AngleBrackets}>
          <span>{">"}</span>
        </div>
      </div>
      {isQuestionBoxOpen && (
        <div className={styles.AnswerBox}>
          <p>{data.answer}</p>
        </div>
      )}
    </div>
  );
}
export default SimpleCard;
