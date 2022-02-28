import React, { useState } from "react";

import { TEAM_LIST } from "./TeamList";

import ImageCard from "@/components/ImageCard";

import ConunLogoWhite from "@/assets/icons/conun_logo_white.svg";
import styles from "./Team.module.scss";

function Team() {
  const [selected, setSelected] = useState("All");
  const teamTabs = [
    "All",
    "Lead",
    "Management / Planning",
    "Development",
    "Design",
    "Marketing",
  ];

  return (
    <div className={styles.TeamPage}>
      <div className={styles.TeamIntroContainer}>
        <div className={styles.LogoContainer}>
          <ConunLogoWhite className={styles.ConunLogo} />
          <p className={styles.ConunTitle}>CONUN GROUP</p>
        </div>
        <div className={styles.TextContainer}>
          <p className={styles.Title}>Meet the team</p>
          <p>
            CONUN is based in Seoul, South Korea. Since 2017 CONUN has strived
            to be innovative and unique working on projects that we hope will
            change the future. Our team members are diverse, coming from various
            locations across the globe...
          </p>
          <div className={styles.TeamTabContainer}>
            {teamTabs.map((tab, i: number) => (
              <div
                key={i}
                onClick={() => setSelected(tab)}
                className={styles.Tab}
              >
                <p className={styles.TabItem}>{tab}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.TeamContainer}>
        <div className={styles.TeamImageContainer}>
          {selected === "All"
            ? TEAM_LIST.map((member: any, i: number) => {
                return <ImageCard key={i} member={member} />;
              })
            : TEAM_LIST.filter((member) => member?.dept === selected).map(
                (sortedMember, i: number) => {
                  return <ImageCard key={i} member={sortedMember} />;
                }
              )}
        </div>
      </div>
    </div>
  );
}
export default Team;
