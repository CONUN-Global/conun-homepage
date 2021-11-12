import { TEAM_LIST } from "./TeamList";

import ImageCard from "@/components/ImageCard";

import ConunLogoWhite from "@/assets/icons/conun_logo_white.svg";
import styles from "./Team.module.scss";

function Team() {
  const teamTabs = [
    "All",
    "Lead",
    "Management / Planning",
    "Development",
    "Design",
    "Marketing",
    "Associate",
  ];

  return (
    <div className={styles.TeamPage}>
      <div className={styles.TeamIntroContainer}>
        <ConunLogoWhite className={styles.ConunLogo} />

        <div className={styles.ConunTitleContainer}>
          <h1 className={styles.ConunTitle}>CONUN GROUP</h1>
        </div>
      </div>
      <div className={styles.TeamContainer}>
        <h3>Meet the team</h3>
        <p>
          CONUN is based in Seoul, South Korea. Since 2017 CONUN has strived to
          be innovative and unique working on projects that we hope with change
          the future. Our team members are diverse coming from various locations
          across the globe...
        </p>
        <div className={styles.TeamTabContainer}>
          {teamTabs.map((tab, i: number) => (
            <div key={i} className={styles.Tab}>
              <p className={styles.TabItem}>{tab}</p>
            </div>
          ))}
        </div>
        <div className={styles.TeamImageContainer}>
          {TEAM_LIST.map((member: any, i: number) => {
            return <ImageCard key={i} member={member} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Team;
