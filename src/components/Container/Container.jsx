import styles from "../Container/Container.module.less";
import PropTypes from "prop-types";
export default function Container({ children, ...props }) {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
}
Container.propTypes = {
  children: PropTypes.node,
};
