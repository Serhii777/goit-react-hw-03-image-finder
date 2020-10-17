import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ onLoadMore }) => {
  return (
    <div className="button-wrapper">
      <button type="button" className="button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  props: PropTypes.exact({
    onLoadMore: PropTypes.func.isRequired,
  }),
};

export default Button;
