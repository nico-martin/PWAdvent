import React from 'react';
import cn from '@utils/classnames';
import SVG from './SVG';

import './Icon.css';

const Icon = ({
  icon,
  className = '',
  spinning = false,
  rotate = false,
  button = false,
  round = false,
  ...props
}: {
  icon: string;
  className?: string;
  rotate?: 90 | 180 | 270 | false;
  spinning?: boolean;
  button?: boolean;
  round?: boolean;
  [key: string]: any;
}) => {
  return (
    <SVG
      className={`${className} icon ${
        rotate !== false ? `icon--rotate-${rotate}` : ''
      } ${cn({
        'icon--animation-spin': spinning,
        'icon--button': button,
        'icon--round': round,
      })}`}
      path={`icon/${icon}.svg`}
      {...props}
    />
  );
};

export default Icon;
