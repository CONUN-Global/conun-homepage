import { useState } from "react";
import { Trans } from "@lingui/react";
import Card from "@/components/Card";
import Button from "@/components/Button";

import DriveIcon from "@/assets/icons/drive_icon.svg";
import MetaconWalletIcon from "@/assets/icons/metacon_wallet.svg";
import styles from "./Product.module.scss";

const PRODUCT_CARD = [
  {
    id: "dirve",
    header: <Trans id="Conun Drive" />,
    image: <DriveIcon />,
    title: <Trans id="EXPLORE AND SHARE" />,
    description: (
      <Trans id="Explore free and private digital assets from users across the globe in The Drive desktop application. The platform is easy. Create a profile, public or anonymous, and explore and share content. Users can also monetize their assets - an easy way to earn while you sleep." />
    ),
    btnMsg: <Trans id="Learn more" />,
  },

  {
    id: "metacon-extension",
    header: <Trans id="Metacon Extension" />,
    image: <MetaconWalletIcon />,
    title: <Trans id="Metacon Extension" />,
    description: (
      <Trans id="Metacon has the same functionality as the CONUN Manager." />
    ),
    btnMsg: <Trans id="Learn more" />,
  },
  {
    id: "metacon-wallet",
    header: <Trans id="Metacon Wallet" />,
    image: <MetaconWalletIcon />,
    title: <Trans id="Metacon Wallet" />,
    description: (
      <Trans id="CONUN’s cryptocurrency wallet gives you access to our coin CONX. You can exchange and swap our coin as well as import your Ethereum wallet." />
    ),
    btnMsg: <Trans id="Learn more" />,
  },
  {
    id: "dsc",
    header: <Trans id="DSC" />,
    image: <MetaconWalletIcon />,
    title: <Trans id="DSC" />,
    description: (
      <Trans id="CONUN’s cryptocurrency wallet gives you access to our coin CONX. You can exchange and swap our coin as well as import your Ethereum wallet." />
    ),
    btnMsg: <Trans id="Learn more" />,
  },
];

function Product() {
  const [displayCard, setDisplayCard] = useState(PRODUCT_CARD[0]);

  const handleCardSelect = (productId: string) => {
    handleCardDisplay(productId);
  };
  const handleCardDisplay = (productId: string) => {
    const selectedCard = PRODUCT_CARD.filter((card) => card.id === productId);
    return setDisplayCard(selectedCard[0]);
  };
  return (
    <div className={styles.ProductSelector}>
      <div className={styles.ProductCardsNav}>
        {PRODUCT_CARD.map((product, i) => {
          return (
            <div key={i} className={styles.PageButtons}>
              <Button
                className={styles.PageButton}
                onClick={() => handleCardSelect(product.id)}
                noStyle
              >
                {product.header}
              </Button>
              <span className={styles.Partition}></span>
            </div>
          );
        })}
      </div>

      <div className={styles.ProductCardContainer}>
        <Card
          header={displayCard.header}
          image={displayCard.image}
          title={displayCard.title}
          className={styles.Card}
          description={displayCard.description}
          btnMsg={displayCard.btnMsg}
          horizontal
        />
      </div>
    </div>
  );
}
export default Product;
