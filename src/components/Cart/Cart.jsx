import styles from "../Cart/Cart.module.less";
import { ReactComponent as Cross } from "../../assets/svg/cross.svg";
import PropTypes from "prop-types";
import { useEffect } from "react";
export default function Cart({ isOpened, setIsOpened }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpened]);
  return (
    <div
      className={styles.cartWrapper}
      onClick={() => {
        setIsOpened(false);
      }}
    >
      <div className={styles.cartContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.cartTitle}>
          <h2>Корзина</h2>
          <Cross onClick={() => setIsOpened(false)} />
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  setIsOpened: PropTypes.func,
  isOpened: PropTypes.bool,
};
