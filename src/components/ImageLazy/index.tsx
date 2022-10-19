import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageLazyType {
  src: string,
  alt: string,
  className: string,
  delayTime: number
}
 
const ImageLazy= ({ src, alt, className, delayTime } : ImageLazyType) => (
  <LazyLoadImage
    alt={alt}
    effect="blur"
    src={src}
    className={className}
    delayTime={delayTime}
  />
);

export default ImageLazy;
