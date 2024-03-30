import PropTypes from "prop-types";
// import Button from "../Button/Button";
import styles from "../ProductCard/ProductCard.module.less";
import btn from "../Button/Button.module.less";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { img, title, price, id } = props;
  return (
    <Link className={styles.card} to={`/product/${id}`}>
      <div className={styles.cardContent}>
        <div>
          <img src={img} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>Від ₴{price}</p>

        {/* <Button >Переглянути</Button> */}
        <button className={btn.buttonDefault}>Переглянути</button>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
};

export default ProductCard;
