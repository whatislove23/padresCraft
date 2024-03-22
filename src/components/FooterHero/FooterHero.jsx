import PropTypes from "prop-types";
import styles from "../FooterHero/FooterHero.module.less";
import Button from "../Button/Button";
function FooterHero({ title, subtitle, button }) {
  return (
    <section className={styles.bg}>
      <div className={styles.heroBlur}>
        <div>
          <h2>{title || "Відвідайте наш магазин"}</h2>

          {subtitle ? (
            <p>{subtitle}</p>
          ) : (
            <p>
              Розпочинайте подорож у світ якості та стилю разом із
              <span> Padres Craft!</span>
            </p>
          )}
        </div>
        {button || <Button to={"/products"}>Переглянути товари</Button>}
      </div>
    </section>
  );
}

FooterHero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  button: PropTypes.element,
};

export default FooterHero;
