import PropTypes from "prop-types";

import styles from "./ShopCard.module.css";

export const ShopCard = ({ card }) => {
  return (
    <div className={styles.shopCard}>
      <div className={styles.cardTitle}>{card.name}</div>
      <div>{card.color}</div>
      <img className={styles.cardImage} src={card.img} alt="Card image" />
      <div className={styles.cardBottom}>
        <div className={styles.cardPrice}>${card.price}</div>
        <button className={styles.cardCartBtn}>ADD TO CART</button>
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};
