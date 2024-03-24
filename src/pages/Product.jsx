import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Product.module.less";
import { tempData } from "../temp/data";
import Button from "../components/Button/Button";
import RadioSet from "../components/RadioSet/RadioSet";
import Container from "../components/Container/Container";
import CheckBox from "../components/CheckBox/CheckBox";
import FooterHero from "../components/FooterHero/FooterHero";
import { ReactComponent as Phone } from "../assets/svg/phone.svg";
import { ReactComponent as RightArrow } from "../assets/svg/slider-arrow-right.svg";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
function Product() {
  const { id } = useParams();
  let product = tempData.find((el) => el.id == id);
  document.title = `PadresCraft ${product.title}`;
  const dispatch = useDispatch();
  const [leaterColor, setLeatherColor] = useState("#55261C");
  const [furnitureColor, setFurnitureColor] = useState("#B1B1B1");
  const [isGrav, setGrav] = useState(false);
  //temporary
  const addToCart = () => {
    dispatch(
      add({
        id,
        price: product.price,
        leather_color: leaterColor,
        furniture_color: furnitureColor,
        title: product.title,
        amount: 1,
        image: product.img,
        engraving: isGrav,
      })
    );
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div>
      <Container>
        <div className={styles.container}>
          <ul>
            <li>
              <Link to="/">PadresCraft</Link>
            </li>
            <li>
              <RightArrow />
            </li>
            <li>
              <Link to="/products">Товари</Link>
            </li>
            <li>
              <RightArrow />
            </li>
            <li>{product.title}</li>
          </ul>
          <div className={styles.productCard}>
            <div className={styles.cardWrap}>
              <img src={product.img} alt={product.title} />
            </div>
            <div className={styles.cardContent}>
              <h2>{product.title}</h2>
              <div className={styles.inputsWrap}>
                <div className={styles.contentRow}>
                  Колір шкіри
                  <RadioSet
                    name="leather"
                    hex1={"#55261C"}
                    hex2={"#510D15"}
                    hex3={"#232122"}
                    selectedColor={leaterColor}
                    setColor={setLeatherColor}
                  />
                </div>
                <div className={styles.contentRow}>
                  Колір фурнітури
                  <RadioSet
                    name="furniture"
                    hex1={"#B1B1B1"}
                    hex2={"#B5A642"}
                    hex3={"#191919"}
                    selectedColor={furnitureColor}
                    setColor={setFurnitureColor}
                  />
                </div>
                <div className={styles.contentRow}>
                  Гравіювання
                  <div className={styles.checkWrap}>
                    <CheckBox
                      name={"grav"}
                      setChecked={setGrav}
                      checked={isGrav}
                    />
                  </div>
                </div>
                <div className={styles.contentRow}>
                  <span>Ціна: ₴{product.price}</span>
                </div>
                <Button onClick={addToCart}>Додати до кошика</Button>
              </div>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </Container>
      <FooterHero
        title="Залашились питання?"
        subtitle="Зателефонуйте нам, і ми з радістю вам допоможемо з усіма деталями!"
        button={
          <Button to={"tel:0677677677"}>
            <p className={styles.buttonNode}>
              067 767 76 77 <Phone />
            </p>
          </Button>
        }
      />
    </div>
  );
}

export default Product;
