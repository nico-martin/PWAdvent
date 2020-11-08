import React from 'react';
import { SVG } from '@theme';

import './Logo.css';

const Logo = ({
  className = '',
  title,
  alt,
  sameheight = false,
  ...props
}: {
  title: string;
  alt: string;
  className?: string;
  sameheight?: boolean;
  [key: string]: any;
}) => (
  <SVG
    className={`${className} logo`}
    path={
      sameheight
        ? `icon/pwadvent-logo-sameheight.svg`
        : `icon/pwadvent-logo.svg`
    }
    title={title}
    alt={alt}
    {...props}
  />
);

export default Logo;
