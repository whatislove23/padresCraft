import { ReactComponent as ArrowLeft } from "../../assets/svg/slider-arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/svg/slider-arrow-right.svg";
import styles from "../ArrowButton/ArrowButton.module.less";
import { PropTypes } from "prop-types";
export default function ArrowButton({ type, ...props }) {
  switch (type) {
    case "right":
      return <ArrowRight {...props} className={styles.arrow} />;
    case "left":
      return <ArrowLeft {...props} className={styles.arrow} />;
    default:
      throw new Error("No arrow type provided");
  }
}
ArrowButton.propTypes = {
  type: PropTypes.string.isRequired,
};
