import React from "react";
import PropTypes from "prop-types";
import "./ImageGalleryItem.css";

const ImageGalleryItem = ({ key, src }) => {
  return (
    <li className="ImageGalleryItem" key={key}>
      <img src={src} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

// ContactList.propTypes = {
//     props: PropTypes.exact({
//       contacts: PropTypes.arrayOf(PropTypes.string),
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   };

//   ContactList.defaultProps = {
//     id: "",
//     name: "",
//     number: '',
//   };

export default ImageGalleryItem;
