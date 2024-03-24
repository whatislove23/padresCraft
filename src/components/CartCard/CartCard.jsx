import styles from "../CartCard/CartCard.module.less";
import { ReactComponent as Cross } from "../../assets/svg/cross.svg";
import { useDispatch } from "react-redux";
import { add, decrease, remove } from "../../store/cartSlice";
export default function CartCard(props) {
  const dispatch = useDispatch();
  const {
    id,
    price,
    leather_color,
    furniture_color,
    title,
    amount,
    image,
    engraving,
  } = props;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.cardCol}>
        <div className={styles.cardTitle}>
          <h2>{title}</h2>
          <Cross
            onClick={() => dispatch(remove(id))}
            viewBox="0 0 40 40"
            width="20"
            height="20"
          />
        </div>
        <div className={styles.row}>
          <div className={styles.colLeft}>
            <div className={styles.options}>
              Колір шкіри
              <div
                className={styles.colorCircle}
                style={{ backgroundColor: leather_color }}
              ></div>
            </div>
            <div className={styles.options}>
              Колір фурнітури
              <div
                className={styles.colorCircle}
                style={{ backgroundColor: furniture_color }}
              ></div>
            </div>
            {engraving && <div className={styles.options}>Гравіювання</div>}
            <div className={styles.price}>
              Ціна :<span> {price * amount}</span>₴
            </div>
          </div>
          <div className={styles.cardButtons}>
            <button
              onClick={() => {
                dispatch(add({ id }));
              }}
            >
              +
            </button>
            {amount}
            <button
              onClick={() => {
                dispatch(decrease({ id }));
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
