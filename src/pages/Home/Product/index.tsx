import { useState } from "react";

import { PRODUCT_CARD } from "./ProductCardContent";

import Horizontal from "@/components/Card/Horizontal";
import Button from "@/components/Button";
import Caption from "@/components/Caption";

import styles from "./Product.module.scss";

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
    <div className={styles.ProductPage}>
      <div className={styles.ProductPageContainer}>
        <div className={styles.ProductCardsNav}>
          {PRODUCT_CARD.map((product, i) => {
            return (
              <div
                key={i}
                className={styles.Tab}
                onClick={() => handleCardSelect(product.id)}
              >
                <p className={styles.TabItem}>{product.header}</p>
              </div>
            );
          })}
        </div>
        <Horizontal round className={styles.ProductCardContainer}>
          <div className={styles.ImageContainer}>{displayCard.image}</div>
          <div className={styles.TextCard}>
            <Caption
              textSize="medium"
              header={displayCard.header}
              title={displayCard.title}
            />
            <p className={styles.Description}>{displayCard.description}</p>
            <Button className={styles.Button}>{displayCard.btnMsg}</Button>
          </div>
        </Horizontal>
      </div>
    </div>
  );
}
export default Product;
