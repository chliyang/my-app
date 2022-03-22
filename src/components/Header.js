const Header = (props) => {
  return (
    <header className="main-header">
      <h1>{props.title}</h1>
      <nav>
        {props.navList.map((navItem) => (
          <a href={navItem.href}>{navItem.content}</a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
