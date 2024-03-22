import { Link } from "react-router-dom";
import Container from "../Container/Container";
import styles from "../Footer/Footer.module.less";
import { ReactComponent as Insta } from "../../assets/svg/insta.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div>
          <Link to="/" className={styles.logo}>
            <span>Padres Craft</span>- Шкіряні вироби
          </Link>
          <p>© 2024 PadresCraft UA, Inc. All rights reserved.</p>
          <p>
            <a href="tel:+0677677677">067 767 76 77</a>
            <a
              href="https://www.instagram.com/padres_craft_ua/"
              target="_blank"
            >
              <Insta />
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
