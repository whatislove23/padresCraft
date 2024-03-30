import { useState, useEffect, useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import ArrowButton from "../ArrowButton/ArrowButton";
import styles from "../ProductsGrid/ProductsGrid.module.less";
import PropTypes from "prop-types";

export default function ProductsGrid({ data }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const cardsPerPage = useRef(16);
  const totalCards = data.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage.current);
  useEffect(() => {
    let width = document.body.clientWidth;
    cardsPerPage.current = 16;
    if (width <= 680) {
      cardsPerPage.current = 10;
      return;
    }
    if (width <= 1090) {
      cardsPerPage.current = 15;
      return;
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    function pagination() {
      const startIndex = currentPage * cardsPerPage.current;
      const endIndex = Math.min(
        (currentPage + 1) * cardsPerPage.current,
        totalCards
      );
      setCurrentItems(data.slice(startIndex, endIndex));
    }
    pagination();
  }, [currentPage, totalCards, data]);

  return (
    <>
      <div className={styles.productsGrid}>
        {currentItems.map((item) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </div>
      <div className={styles.pagination}>
        <ArrowButton
          type="left"
          onClick={() =>
            setCurrentPage((prev) => (prev <= 0 ? totalPages - 1 : (prev -= 1)))
          }
        />
        <div>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              className={index == currentPage ? styles.current : "false"}
              key={index}
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <ArrowButton
          type="right"
          onClick={() =>
            setCurrentPage((prev) => (prev >= totalPages - 1 ? 0 : (prev += 1)))
          }
        />
      </div>
    </>
  );
}

ProductsGrid.propTypes = {
  data: PropTypes.array,
};
