import styles from "../Magazine.module.scss";

const Footer = (props) => {
  return (
    <footer>
      <p id={styles["copyright"]}>{props.copyright}</p>
    </footer>
  );
};
export default Footer;
