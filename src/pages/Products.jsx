import { useEffect, useState } from "react";
import styles from "../pages/Products.module.less";
import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { ReactComponent as Find } from "../assets/svg/find.svg";
import { ReactComponent as AlphabetDown } from "../assets/svg/alphabet_down.svg";
import { ReactComponent as AlphabetUp } from "../assets/svg/alphabet_up.svg";
import { ReactComponent as PriceDown } from "../assets/svg/price_down.svg";
import { ReactComponent as PriceUp } from "../assets/svg/price_up.svg";
import { tempData } from "../temp/data";
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";

export default function Products() {
  const [search, setSearch] = useState("");
  const [sortBy, setSort] = useState("alphabet_down");
  const [data, setData] = useState(tempData);

  useEffect(() => {
    let res = data.filter((el) =>
      el.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setData(res);
    if (search == "") setData(tempData);
  }, [search, data]);

  return (
    <div className={styles.wrapGap}>
      <Container>
        <SectionTitle>Наші товари</SectionTitle>
        <form
          className={styles.form}
          action="#"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.inputWrap}>
            <input
              type="text"
              placeholder="Пояс шкіряний..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <Find />
          </div>
          <div className={styles.buttonsWrap}>
            <div className={styles.buttonContainer}>
              <input
                type="radio"
                name="sort-by"
                id="alphabet_down"
                value="alphabet_down"
                checked={sortBy === "alphabet_down"}
                onChange={(e) => setSort(e.target.value)}
              />
              <label htmlFor="alphabet_down">
                <AlphabetDown />
              </label>
            </div>
            <div className={styles.buttonContainer}>
              <input
                type="radio"
                name="sort-by"
                id="alphabet_up"
                value="alphabet_up"
                checked={sortBy === "alphabet_up"}
                onChange={(e) => setSort(e.target.value)}
              />
              <label htmlFor="alphabet_up">
                <AlphabetUp />
              </label>
            </div>
            <div className={styles.buttonContainer}>
              <input
                type="radio"
                name="sort-by"
                id="price_down"
                value="price_down"
                checked={sortBy === "price_down"}
                onChange={(e) => setSort(e.target.value)}
              />
              <label htmlFor="price_down">
                <PriceDown />
              </label>
            </div>
            <div className={styles.buttonContainer}>
              <input
                type="radio"
                name="sort-by"
                id="price_up"
                value="price_up"
                checked={sortBy === "price_up"}
                onChange={(e) => setSort(e.target.value)}
              />
              <label htmlFor="price_up">
                <PriceUp />
              </label>
            </div>
          </div>
        </form>
        <ProductsGrid data={data} />
      </Container>
    </div>
  );
}
