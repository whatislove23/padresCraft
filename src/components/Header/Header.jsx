import Container from "../Container/Container";
import styles from "../Header/Header.module.less";
import { Link } from "react-router-dom";
import { ReactComponent as Phone } from "../../assets/svg/phone.svg";
import { ReactComponent as Shop } from "../../assets/svg/shop.svg";
import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg";
import Cart from "../Cart/Cart";
import { useState } from "react";

export default function Header() {
  const [isCartOpened, setIsOpened] = useState(false);
  return (
    <header className={styles.header}>
      {isCartOpened && (
        <Cart setIsOpened={setIsOpened} isOpened={isCartOpened} />
      )}
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
            <p
              onClick={() => {
                setIsOpened(true);
              }}
            >
              <span>Корзина</span>
              <CartIcon />
            </p>
          </nav>
        </div>
      </Container>
    </header>
  );
}
