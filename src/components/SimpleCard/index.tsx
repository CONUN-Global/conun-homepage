import React, { useState } from "react";
import { Trans } from "@lingui/macro";

import Link from "next/link";

import styles from "./SimpleCard.module.scss";

const link = "./assets/KYC_verification_guide.pdf";

export interface SimpleCardProps {
  data: {
    question?: JSX.Element;
    answer?: JSX.Element;
  };
  index: number;
}
function SimpleCard({ data, index }: SimpleCardProps) {
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
          {index === 3 ? (
            <div>
              {data.answer}
              <Link href={link}>
                <a
                  target="_blank"
                  className={styles.DownloadLink}
                  rel="noreferrer"
                >
                  <Trans id="Fid It Here" />
                </a>
              </Link>
            </div>
          ) : (
            <p>{data.answer}</p>
          )}
        </div>
      )}
    </div>
  );
}
export default SimpleCard;
