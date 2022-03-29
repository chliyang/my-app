import styles from "../Magazine.module.scss";

const Aside = (props) => {
  return (
    <aside>
      <h4>{props.title}</h4>
      <ul className={styles.related}>
        {props.postList.map((post, index) => (
          <li key={index}>
            <img
              src={require("../../../img/" + post.imgSrc)}
              alt={post.imgAlt}
              width="75px"
              height="75px"
            />

            <a href={post.linkHref}>{post.linkContent}</a>
            <p className={styles.relatedAuthor}>{post.pContent}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
