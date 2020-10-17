import React from "react";
import PropTypes from "prop-types";
import "./ImageGalleryItem.css";

const ImageGalleryItem = ({ id, src, onShow }) => {
  return (
    <li className="gallery-item" key={id} onClick={onShow}>
      <img src={src} alt="" className="gallery-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  props: PropTypes.exact({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    onShow: PropTypes.func.isRequired,
  }),
};

 ImageGalleryItem.defaultProps = {
    id: "",
    src: "",
  };

export default ImageGalleryItem;
