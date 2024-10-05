import PropTypes from "prop-types";

import styles from "./ShopItem.module.css";

export const ShopItem = ({ card }) => {
  return (
    <div className={styles.shopItem}>
      <img className={styles.itemImage} src={card.img} alt="Card image" />
      <div className={styles.itemTitle}>{card.name}</div>
      <div>{card.color}</div>
      <div className={styles.itemPrice}>${card.price}</div>
      <button className={styles.itemCartBtn}>ADD TO CART</button>
    </div>
  );
};

ShopItem.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};
