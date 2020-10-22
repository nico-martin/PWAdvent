import React from 'react';
import { SVG } from '@theme';

import './Logo.css';

const Logo = ({
  className = '',
  title,
  alt,
  ...props
}: {
  title: string;
  alt: string;
  className?: string;
  [key: string]: any;
}) => (
  <SVG
    className={`${className} logo`}
    path="icon/pwadvent-logo.svg"
    title={title}
    alt={alt}
    {...props}
  />
);

export default Logo;
