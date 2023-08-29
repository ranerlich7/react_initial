import PropTypes from "prop-types";
import Button from "./Button";

function Header({ text, subtext }) {
  return (
    <>
      <h1>{text}</h1>
      <h2>{subtext}</h2>
      <Button />
      <hr />
    </>
  );
}

Header.defaultProps = {
  text: "Default Header",
  subtext: "",
};
Header.propTypes = {
  text: PropTypes.string,
  subtext: PropTypes.number,
};
export default Header;
