import { useState } from "react";

import Card from "@/components/Card";
import Button from "@/components/Button";

import DriveIcon from "@/assets/icons/drive_icon.svg";
import MetaconWalletIcon from "@/assets/icons/metacon_wallet.svg";
import styles from "./Product.module.scss";

const PRODUCT_CARD = [
  {
    id: "dirve",
    header: "Conun Drive",
    image: <DriveIcon />,
    title: "EXPLORE AND SHARE",
    description:
      "Explore free and private digital assets from users across the globe in The Drive desktop application. The platform is easy. Create a profile, public or anonymous, and explore and share content. Users can also monetize their assets - an easy way to earn while you sleep.",
    btnMsg: "Learn more",
  },

  {
    id: "metacon-extension",
    header: "Metacon Extension",
    image: <MetaconWalletIcon />,
    title: "Metacon Extension",
    description: "Metacon has the same functionality as the CONUN Manager.",
    btnMsg: "Learn more",
  },
  {
    id: "metacon-wallet",
    header: "Metacon Wallet",
    image: <MetaconWalletIcon />,
    title: "Metacon Wallet",
    description:
      "CONUN’s cryptocurrency wallet gives you access to our coin CONX. You can exchange and swap our coin as well as import your Ethereum wallet.",
    btnMsg: "Learn more",
  },
  {
    id: "dsc",
    header: "DSC",
    image: <MetaconWalletIcon />,
    title: "DSC",
    description:
      "CONUN’s cryptocurrency wallet gives you access to our coin CONX. You can exchange and swap our coin as well as import your Ethereum wallet.",
    btnMsg: "Learn more",
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
          description={displayCard.description}
          btnMsg={displayCard.btnMsg}
          horizontal
        />
      </div>
    </div>
  );
}
export default Product;
