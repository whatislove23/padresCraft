import Container from "../Container/Container";
import styles from "../Header/Header.module.less";
import { Link } from "react-router-dom";
import { ReactComponent as Phone } from "../../assets/svg/phone.svg";
import { ReactComponent as Shop } from "../../assets/svg/shop.svg";
import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg";
import Cart from "../Cart/Cart";

import { useDispatch, useSelector } from "react-redux";
import { open } from "../../store/cartSlice";
export default function Header() {
  const { isOpen, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      {isOpen && <Cart />}
      <Container>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            <span>Padres Craft</span>- Шкіряні вироби
          </Link>
          <nav className={styles.nav}>
            <a href="tel:+0677677677">
              <span>067 767 76 77</span>
              <Phone />
            </a>
            <Link to="/products">
              <span>Товари</span>
              <Shop />
            </Link>
            <div onClick={() => dispatch(open())}>
              <p>Корзина</p>
              <div className={styles.cartCircleContainer}>
                {items.length ? (
                  <p className={styles.circle}>{items.length}</p>
                ) : null}
                <CartIcon />
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
