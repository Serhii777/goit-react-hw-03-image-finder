import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import "./ImageGallery.css";

const ImageGallery = ({ images, onShowLargeImage }) => {
  return (
    <ul className="gallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          id={id}
          src={webformatURL}
          onShow={() => onShowLargeImage(largeImageURL)}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  props: PropTypes.exact({
    images: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onShowLargeImage: PropTypes.func.isRequired,
  }),
};

ImageGallery.defaultProps = {
  id: "",
  webformatURL: "",
  largeImageURL: "",
};

export default ImageGallery;
