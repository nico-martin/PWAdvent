// @ts-ignore

/*
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/respimg/ls.respimg';*/
import React from 'react';
import { ApiImage } from '@comps/types';
import cn from '@utils/classnames';
import styles from './LazyImage.module.css';

const BASE = 'lazyimage';

/*
lazySizes.cfg.lazyClass = styles.imageLazyload;
lazySizes.cfg.loadingClass = styles.imageLazyloading;
lazySizes.cfg.loadedClass = styles.imageLazyloaded;
document.addEventListener('lazyloaded', (e) => {
  lazySizesFindParent(e.target).classList.add(styles.isLoaded);
});*/

const lazySizesFindParent = (el) => {
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
      Object.values(image.sizes).map((size) => ({
        url: size.url,
        width: size.width,
        height: size.height,
      }))[0],
    [image]
  );

  return (
    <figure
      className={cn(
        styles.root,
        { [styles.background]: background },
        className
      )}
      {...props}
    >
      {background ? (
        <React.Fragment>
          <div
            aria-hidden="true"
            className={styles.background}
            style={{
              backgroundImage: "url('" + image.placeholder + "')",
            }}
          />
          <div
            title={alt || image.alt}
            className={cn(styles.image, styles.imageLazyload)}
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
            className={styles.preview}
            src={image.placeholder}
          />
          <img
            alt={alt || image.alt}
            width={mainImage.width}
            height={mainImage.height}
            className={cn(styles.image, styles.imageLazyload)}
            data-sizes="auto"
            src={image.placeholder}
            data-src={mainImage.url}
            data-srcset={Object.entries(image.sizes)
              .map(([name, { width, url }]) => `${url} ${width}w`)
              .join(', ')}
          />
        </React.Fragment>
      )}
    </figure>
  );
};

export default LazyImage;
