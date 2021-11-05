import { useState } from "react";

import { PRODUCT_CARD } from "./ProductCardContent";

import Card from "@/components/Card";
import Button from "@/components/Button";

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
