import styles from "../RadioSet/RadioSet.module.less";
import PropTypes from "prop-types";
export default function RadioSet({
  hex1,
  hex2,
  hex3,
  setColor,
  selectedColor,
  name,
}) {
  return (
    <div className={styles.setWrap}>
      <div className={styles.radioWrap}>
        <input
          type="radio"
          name={name}
          id={hex1}
          checked={selectedColor == hex1}
          onChange={() => setColor(hex1)}
        />
        <label htmlFor={hex1} style={{ backgroundColor: hex1 }}></label>
      </div>
      <div className={styles.radioWrap}>
        <input
          type="radio"
          name={name}
          id={hex2}
          checked={selectedColor == hex2}
          onChange={() => setColor(hex2)}
        />
        <label htmlFor={hex2} style={{ backgroundColor: hex2 }}></label>
      </div>
      <div className={styles.radioWrap}>
        <input
          type="radio"
          name={name}
          id={hex3}
          checked={selectedColor == hex3}
          onChange={() => setColor(hex3)}
        />
        <label htmlFor={hex3} style={{ backgroundColor: hex3 }}></label>
      </div>
    </div>
  );
}
RadioSet.propTypes = {
  hex1: PropTypes.string,
  hex2: PropTypes.string,
  hex3: PropTypes.string,
  setColor: PropTypes.func,
  selectedColor: PropTypes.string,
  name: PropTypes.string,
};
