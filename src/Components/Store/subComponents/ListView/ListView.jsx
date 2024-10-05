import PropTypes from "prop-types";

import { ShopItem } from "./subComponents/ShopItem/ShopItem";
import styles from "./ListView.module.css";

export const ListView = ({ cards }) => {
  return (
    <div>
      {cards.map((card, index) => (
        <div className={styles.listItem} key={index}>
          <ShopItem card={card} />
        </div>
      ))}
    </div>
  );
};

ListView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
