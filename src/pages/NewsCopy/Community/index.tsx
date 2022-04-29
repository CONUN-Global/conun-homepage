import NewsHeader from "@/components/NewsHeader";
import styles from "./Community.module.scss";

function Community() {
  return (
    <div className={styles.CommunityContainer}>
      <NewsHeader>Official Community</NewsHeader>
      <div className={styles.BtnContainer}>
        <button>ALL</button>
        <button>XANGLE</button>
        <button>YOUTUBE</button>
        <button>MEDIUM</button>
        <button>GITHUB</button>
        <button>DISCORD</button>
      </div>
    </div>
  );
}

export default Community;
