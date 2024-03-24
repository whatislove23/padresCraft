import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "../ProductCard/ProductCard.module.less";

function ProductCard(props) {
  const { img, title, price, id } = props;
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div>
          <img src={img} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>Від ₴{price}</p>
        <Button to={`/product/${id}`}>Переглянути</Button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
};

export default ProductCard;
