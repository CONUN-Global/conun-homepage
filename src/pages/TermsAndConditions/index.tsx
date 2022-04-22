import { Trans } from "@lingui/macro";
import { useRouter } from "next/router";
import {
  DATA,
  GENERAL_DEFINITION_LIST,
  TYPE_OF_SERVICE_LIST,
  TERMINATION_USE_CONTRACT_LIST,
  USER_MANAGEMENT_LIST,
} from "./Data";
import Caption from "@/components/Caption";
import Button from "@/components/Button";
import Text from "@/components/Text";

import styles from "./TermsAndConditions.module.scss";

function TermsAndConditions() {
  const router = useRouter();
  const handleSection = (id: string) => {
    router.replace(`#${id}`);
  };
  return (
    <div className={styles.TermsAndConditions}>
      <div className={styles.NavigationContainer}>
        <div className={styles.Navigation}>
          {DATA.map((content, i: number) => {
            return (
              <Button
                key={i}
                noStyle
                onClick={() => handleSection(content.id)}
                className={styles.NavItems}
              >
                {content.title}
              </Button>
            );
          })}
        </div>
      </div>

      <div className={styles.TermsAndConditionsContainer}>
        <div className={styles.TermsAndConditionContent}>
          <p className={styles.MainTitle}>
            <Trans id="Terms and Conditions" />
          </p>
          {DATA.map((content, i: number) => {
            if (content.id === "type-and-change-of-service") {
              return (
                <section className={styles.Section} key={i} id={content.id}>
                  <Caption className={styles.Title} title={content.title} />
                  <Text
                    className={styles.Line}
                    description={
                      <Trans id="The company offers the following services." />
                    }
                  />
                  <div className={styles.SubList}>
                    {TYPE_OF_SERVICE_LIST.map((list, index) => {
                      return <Text key={index} description={list} />;
                    })}
                  </div>

                  {content.description.map((paragraph, index: number) => {
                    return (
                      <Text
                        key={index}
                        className={styles.Line}
                        description={paragraph}
                      />
                    );
                  })}
                </section>
              );
            } else if (content.id === "termination-of-use-contract") {
              return (
                <section className={styles.Section} key={i} id={content.id}>
                  <Caption className={styles.Title} title={content.title} />
                  <Text
                    className={styles.Line}
                    description={
                      <Trans id="Members may at any time notify the Company of their intention to terminate the Company through consultation with the Company's manager and may terminate the contract by e-mail. However, if the member has coins, withdrawal is not possible." />
                    }
                  />
                  <Text
                    className={styles.Line}
                    description={
                      <Trans id="The Company may terminate the service contract if any of the following reasons arises or is confirmed." />
                    }
                  />
                  <div className={styles.SubList}>
                    {TERMINATION_USE_CONTRACT_LIST.map((list, index) => {
                      return <Text key={index} description={list} />;
                    })}
                  </div>

                  {content.description.map((paragraph, index: number) => {
                    return (
                      <Text
                        key={index}
                        className={styles.Line}
                        description={paragraph}
                      />
                    );
                  })}
                </section>
              );
            } else if (content.id === "user-management") {
              return (
                <section key={i} id={content.id} className={styles.Section}>
                  <Caption className={styles.Title} title={content.title} />
                  <Text
                    className={styles.Line}
                    description={
                      <Trans id="The Company may take the following actions against members who violate the terms of this terms of service and related laws and general principles of business transactions." />
                    }
                  />
                  <div className={styles.SubList}>
                    {USER_MANAGEMENT_LIST.map((list, index) => {
                      return <Text key={index} description={list} />;
                    })}
                  </div>

                  {content.description.map((paragraph, index: number) => {
                    return (
                      <Text
                        key={index}
                        className={styles.Line}
                        description={paragraph}
                      />
                    );
                  })}
                </section>
              );
            } else {
              return (
                <section key={i} id={content.id} className={styles.Section}>
                  <Caption className={styles.Title} title={content.title} />
                  {content.description.map((paragraph, i: number) => {
                    return (
                      <Text
                        key={i}
                        className={styles.Line}
                        description={paragraph}
                      />
                    );
                  })}
                  <div className={styles.SubList}>
                    {content.id === "general-definition" &&
                      GENERAL_DEFINITION_LIST.map((list, i: number) => {
                        return <Text key={i} description={list} />;
                      })}
                  </div>
                </section>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
