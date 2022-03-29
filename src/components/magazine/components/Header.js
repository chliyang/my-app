import styles from "../Magazine.module.scss";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerOne}>{props.title}</h1>
      <nav>
        {props.navList.map((navItem) => (
          <a href={navItem.href}>{navItem.content}</a>
        ))}
      </nav>
    </div>
  );
};

export default Header;
