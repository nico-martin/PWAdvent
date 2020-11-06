import React from 'react';

// @ts-ignore
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes/plugins/bgset/ls.bgset';
import './LazyImage.css';

import { ApiImage } from '@app/types';

const BASE = 'lazyimage';

lazySizes.cfg.lazyClass = `${BASE}__image--lazyload`;
lazySizes.cfg.loadingClass = `${BASE}__image--lazyloading`;
lazySizes.cfg.loadedClass = `${BASE}__image--lazyloaded`;
document.addEventListener('lazyloaded', e => {
  lazySizesFindParent(e.target).classList.add(`${BASE}--loaded`);
});

const lazySizesFindParent = el => {
  while ((el = el.parentElement) && !el.classList.contains(BASE));
  return el;
};

const LazyImage = ({
  image,
  background = false,
  alt,
  width = 0,
  height = 0,
  className = '',
  ...props
}: {
  image: ApiImage;
  background?: boolean;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  [key: string]: any;
}) => {
  const mainImage = React.useMemo(
    () =>
      Object.values(image.sizes).map(size => ({
        url: size.url,
        width: size.width,
        height: size.height,
      }))[0],
    [image]
  );

  return (
    <figure
      className={`${BASE} ${
        background ? `${BASE}--background` : ''
      } ${className}`}
      {...props}
    >
      {background ? (
        <React.Fragment>
          <div
            aria-hidden="true"
            className={`${BASE}__preview`}
            style={{
              backgroundImage: "url('" + image.placeholder + "')",
            }}
          />
          <div
            title={alt || image.alt}
            className={`${BASE}__image ${BASE}__image--lazyload`}
            style={{ backgroundImage: "url('" + image.placeholder + "')" }}
            data-bgset={Object.entries(image.sizes)
              .map(([width, url]) => `${url} ${width}w`)
              .join(', ')}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <img
            aria-hidden="true"
            className={`${BASE}__preview`}
            src={image.placeholder}
          />
          <img
            alt={alt || image.alt}
            width={mainImage.width}
            height={mainImage.height}
            className={`${BASE}__image ${BASE}__image--lazyload`}
            data-sizes="auto"
            src={image.placeholder}
            data-src={mainImage.url}
            data-srcset={Object.entries(image.sizes)
              .map(([width, url]) => `${url} ${width}w`)
              .join(', ')}
          />
        </React.Fragment>
      )}
    </figure>
  );
};

export default LazyImage;
