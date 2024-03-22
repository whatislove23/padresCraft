import { Link } from "react-router-dom";
import styles from "../Button/Button.module.less";
import PropTypes from "prop-types";

export default function Button({ to, shadow, children, ...props }) {
  let style = styles.buttonDefault;
  switch (shadow) {
    case "left":
      style = styles.buttonLeft;
      break;
    case "right":
      style = styles.buttonRight;
      break;
    default:
      style = styles.buttonDefault;
      break;
  }
  return (
    <Link to={to} {...props} className={style}>
      {children}
    </Link>
  );
}
Button.propTypes = {
  shadow: PropTypes.oneOf(["left", "right"]),
  children: PropTypes.node,
  to: PropTypes.string,
};
