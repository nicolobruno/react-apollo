import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
const ImageLazy = ({ src, alt, className, delayTime }) => (
  <LazyLoadImage
    alt={alt}
    effect="blur"
    src={src}
    className={className}
    delayTime={delayTime}
    />
);

export default ImageLazy;
