const Footer = (props) => {
  return (
    <footer>
      <p id="copyright" className="copyright text">
        {props.copyright}
      </p>
    </footer>
  );
};
export default Footer;
