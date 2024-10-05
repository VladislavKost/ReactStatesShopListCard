import { ShopCard } from "./subComponents/ShopCard/ShopCard";
import PropTypes from "prop-types";
import styles from "./ShopCardView.module.css";

export const CardsView = ({ cards }) => {
  return (
    <div className={styles.cardsView}>
      {cards.map((card, index) => (
        <div className={styles.cardItem} key={index}>
          <ShopCard card={card} />
        </div>
      ))}
    </div>
  );
};

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
