import styles from "../Menu/Menu.module.less";
import { ReactComponent as Cross } from "../../assets/svg/cross.svg";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { open } from "../../store/cartSlice";
import PropTypes from "prop-types";
export default function Menu({ setState }) {
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className={styles.cartContent}>
      <div className={styles.cartTitle}>
        <h2>Меню</h2>
        <Cross onClick={() => setState(false)} />
      </div>
      <div className={styles.links}>
        <NavLink
          to="/"
          onClick={() => setState(false)}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Головна
        </NavLink>
        <NavLink
          to="/products"
          onClick={() => setState(false)}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Товари
        </NavLink>
        <NavLink
          className={styles.link}
          to=""
          onClick={() => {
            setState(false);
            dispatch(open());
          }}
        >
          Корзина
        </NavLink>
      </div>
    </div>
  );
}

Menu.propTypes = {
  setState: PropTypes.func,
};
