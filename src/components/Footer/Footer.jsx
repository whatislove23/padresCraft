import { Link } from "react-router-dom";
import Container from "../Container/Container";
import styles from "../Footer/Footer.module.less";
import { ReactComponent as Insta } from "../../assets/svg/insta.svg";
import { ReactComponent as Phone } from "../../assets/svg/phone.svg";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerWrap}>
          <div>
            <Link to="/" className={styles.logo}>
              Padres Craft <span>- Шкіряні вироби</span>
            </Link>
            <p>© 2024 PadresCraft UA, Inc. All rights reserved.</p>
            <div className={styles.links}>
              <a href="tel:+0677677677">
                <span>067 767 76 77</span>
                <Phone />
              </a>
              <a
                href="https://www.instagram.com/padres_craft_ua/"
                target="_blank"
              >
                <Insta />
              </a>
            </div>
          </div>
          <p className={styles.moibleRights}>
            © 2024 PadresCraft UA, Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
