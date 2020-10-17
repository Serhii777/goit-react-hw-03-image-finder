import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ largeImageURL, onCloseOverlay }) => {
  return (
    <div className="overlay" onClick={onCloseOverlay}>
      <div className="modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  props: PropTypes.exact({
    largeImageURL: PropTypes.string.isRequired,
    onCloseOverlay: PropTypes.func.isRequired,
  }),
};

Modal.defaultProps = {
  largeImageURL: "",
};

export default Modal;
