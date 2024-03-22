import styles from "../SectionTitle/SectionTitle.module.less";
import PropTypes from "prop-types";

export default function SectionTitle({ children }) {
  return <h2 className={styles.title}>{children}</h2>;
}
SectionTitle.propTypes = {
  children: PropTypes.string,
};
