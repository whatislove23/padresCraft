import styles from "./CheckBox.module.less";
import { ReactComponent as Check } from "../../assets/svg/check.svg";

import PropTypes from "prop-types";
export default function CheckBox({ name, checked, setChecked }) {
  return (
    <div className={styles.checkBoxWrap}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor={name}>
        <Check />
      </label>
    </div>
  );
}
CheckBox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  setChecked: PropTypes.func,
};
