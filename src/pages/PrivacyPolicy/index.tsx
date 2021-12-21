import { Trans } from "@lingui/macro";
import { useRouter } from "next/router";

import {
  DATA,
  PURPOSE_OF_COLLECTION_LIST,
  PERSONAL_INFO_SHARING_LIST,
  USER_RESPONSIBILITIES_LIST,
} from "./Data";
import ContactCard from "./ContactCard";

import Button from "@/components/Button";
import Caption from "@/components/Caption";
import Text from "@/components/Text";

import styles from "./PrivacyPolicy.module.scss";

function PrivacyPolicy() {
  const router = useRouter();
  const handleSection = (id: string) => {
    router.replace(`#${id}`);
  };
  return (
    <div className={styles.PrivacyPolicy}>
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
      <div className={styles.PrivacyPolicyContainer}>
        <div className={styles.PrivacyPolicyContent}>
          <p className={styles.MainTitle}>
            <Trans id="Privacy Policy" />
          </p>
          {DATA.map((content) => {
            return (
              <section key={content.id} className={styles.Section}>
                <Caption className={styles.Title} title={content.title} />
                {content.description.map((clause, i: number) => {
                  return (
                    <div key={i}>
                      <Text description={clause.article}></Text>
                      <Text description={clause.section}></Text>
                    </div>
                  );
                })}
                <div className={styles.List}>
                  {content.id ===
                    "purpose-of-Collection-and-use-of-personal-information" &&
                    PURPOSE_OF_COLLECTION_LIST.map((list, i: number) => {
                      return <Text key={i} description={list} />;
                    })}
                  {content.id ===
                    "providing-and-sharing-personal-information" &&
                    PERSONAL_INFO_SHARING_LIST.map((list, i: number) => {
                      return <Text key={i} description={list} />;
                    })}
                  {content.id === "user-responsibilities" &&
                    USER_RESPONSIBILITIES_LIST.map((list, i: number) => {
                      return <Text key={i} description={list} />;
                    })}
                  {content.id === "manager-contact" && (
                    <ContactCard
                      internal={true}
                      name={<Trans id=" Sung-Soo Hong" />}
                      department={<Trans id=" CONUN GLOBAL COO" />}
                      email={<Trans id="help@conun.io" />}
                    />
                  )}
                </div>
                {content.id === "duty-of-notification" && (
                  <div className={styles.DutyOfNotificationContainer}>
                    <Text
                      description={
                        <Trans id="Please contact the following organizations if you need to report or consult about personal information infringement. A. Personal Information Infringement Notification Center (operated by Korea Internet & Security Agency)" />
                      }
                    />
                    <div className={styles.ContactCard}>
                      <ContactCard
                        internal={false}
                        task={
                          <Trans id="Reporting the violation of personal information and requesting counseling" />
                        }
                        homepage={<Trans id="privacy.kisa.or.kr" />}
                        phone={<Trans id=" (without area code)118" />}
                        address={
                          <Trans id="(58324) 9 Jinheung-gil, Naju, Jeollanam-do, 3rd Floor Personal Information Infringement Notification Center" />
                        }
                      />
                    </div>
                    <Text
                      description={
                        <Trans id="B. Personal Information Dispute Mediation Committee" />
                      }
                    />
                    <div className={styles.ContactCard}>
                      <ContactCard
                        internal={false}
                        task={
                          <Trans id="Personal Information Conflicts Adjustment Application, Group Conflicts Adjustment (Civil settlement)" />
                        }
                        homepage={<Trans id="www.kopico.go.kr" />}
                        phone={<Trans id="1833-6972" />}
                        address={
                          <Trans id="(03171) 209, Sejong-daero, Jongno-gu, Seoul, KOREA 4th Floor Government Seoul Building" />
                        }
                      />
                    </div>
                    <Text
                      description={
                        <Trans id="C. Cyber Investigation Division, Supreme Prosecutors' Office : 1301 (cybercid.spo.go.kr)" />
                      }
                    />
                    <Text
                      description={
                        <Trans id="D. National Police Agency Cyber Bureau : 182 (cyberbureau.police.go.kr)" />
                      }
                    />
                    <Text
                      description={
                        <Trans id="E. Online Privacy Association : 02-550-9500 (www.opa.or.kr)" />
                      }
                    />
                    <Text
                      description={
                        <Trans id="This Privacy Policy will be effective March 16, 2018." />
                      }
                    />
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default PrivacyPolicy;
