import Container from "../Container/Container.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import styles from "../OtherProducts/OtherProducts.module.less";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import ArrowButton from "../ArrowButton/ArrowButton.jsx";
import { tempData } from "../../temp/data.js";
function OtherProducts() {
  const [step, setStep] = useState(0);
  const [items, setItems] = useState(tempData.slice(step, step + 3));
  const moveForward = () =>
    setStep((prev) => (prev >= tempData.length ? 0 : (prev += 3)));
  const moveBackward = () =>
    setStep((prev) => (prev <= 0 ? tempData.length - 3 : prev - 3));
  useEffect(() => {
    function handleSlider() {
      let currentItems = tempData.slice(step, step + 3);
      if (currentItems.length < 3) {
        currentItems.push(...tempData.slice(0, 3 - currentItems.length));
      }
      setItems(currentItems);
    }
    handleSlider();
  }, [step]);
  return (
    <section>
      <Container>
        <SectionTitle>Інші товари</SectionTitle>
        <div className={styles.content}>
          <ArrowButton type="left" onClick={moveBackward} />
          {items.map((data) => (
            <ProductCard {...data} key={data.id} />
          ))}
          <ArrowButton type="right" onClick={moveForward} />
        </div>
      </Container>
    </section>
  );
}

export default OtherProducts;
