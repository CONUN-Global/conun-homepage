import { DOWNLOAD_CONTENT } from "./DownloadContent";
import Card, { CardProps } from "@/components/Card";
import styles from "./DownloadBody.module.scss";

function DownloadBody() {
  return (
    <div className={styles.DownloadBody}>
      {DOWNLOAD_CONTENT.map((download: CardProps, i: number) => (
        <Card
          key={i}
          horizontal
          color="green"
          textSize="medium"
          className={i === 1 ? styles.Card : styles.Reversed}
          image={download.image}
          header={download.header}
          title={download.title}
          description={download.description}
          btnMsg={download.btnMsg}
        />
      ))}
    </div>
  );
}
export default DownloadBody;
