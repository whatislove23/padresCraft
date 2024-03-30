import styles from "../Cart/Cart.module.less";
import { ReactComponent as Cross } from "../../assets/svg/cross.svg";
import PropTypes from "prop-types";
import { useEffect } from "react";
import CartCard from "../CartCard/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { close, getTotalPrice } from "../../store/cartSlice";
import Button from "../Button/Button";
import { v4 as uuidv4 } from "uuid";
export default function Cart() {
  const { isOpen, items, total } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotalPrice());
  }, [items]);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    dispatch(getTotalPrice());
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div
      className={styles.cartWrapper}
      onClick={() => {
        dispatch(close());
      }}
    >
      <div className={styles.cartContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.cartTitle}>
          <h2>Корзина</h2>
          <Cross onClick={() => dispatch(close())} />
        </div>
        <div className={styles.cartList}>
          {items.map((data) => (
            <CartCard key={uuidv4()} {...data} />
          ))}
        </div>
        <div className={styles.checkout}>
          Загальна ціна: {total}₴
          <Button
            style={{
              fontSize: "16px",
              padding: "10px 10px",
              height: "56px",
              width: "220px",
            }}
          >
            Зробити замовлення
          </Button>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  setIsOpened: PropTypes.func,
  isOpened: PropTypes.bool,
};
