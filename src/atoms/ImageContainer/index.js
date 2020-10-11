import React from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ImageContainer({ src, alt }) {
  return <LazyLoadImage alt={alt} src={src} effect="blur" />;
}

ImageContainer.defaultProps = {
  src: "",
  alt: "default",
};

ImageContainer.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageContainer;
