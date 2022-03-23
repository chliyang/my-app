const Aside = (props) => {
  console.log(props.postList[0].imgSrc);

  return (
    <aside>
      <h4>{props.title}</h4>
      <ul className="related">
        {props.postList.map((post, index) => (
          <li key={index}>
            <img
              src={require("../../../img/" + post.imgSrc)}
              alt={post.imgAlt}
              width="75px"
              height="75px"
            />

            <a href={post.linkHref}>{post.linkContent}</a>
            <p className="related-author">{post.pContent}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
