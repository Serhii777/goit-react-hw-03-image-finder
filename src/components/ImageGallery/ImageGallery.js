import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import "./ImageGallery.css";

const ImageGallery = ({images}) => {
console.log(images);

  return (
    <ul className="ImageGallery">

      {images.map(({ id, webformatURL }) => (
      <ImageGalleryItem
        key={id}
        src={webformatURL}
        // completed={completed}
        // onRemove={() => onRemoveTask(id)}
        // onUpdate={() => onUpdateTask(id)}
      />
    ))}

    </ul>
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

export default ImageGallery;
