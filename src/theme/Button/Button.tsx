import React from 'react';

import './Button.css';
import Icon from '../SVG/Icon';

const Button = ({
  children = '',
  className = '',
  onClick,
  ghost = false,
  round = false,
  icon = '',
  iconRight = false,
  ...props
}: {
  children?: React.JSX.Element | React.JSX.Element[] | string;
  className?: string;
  onClick: Function;
  ghost?: boolean;
  round?: boolean;
  icon?: string;
  iconRight?: boolean;
  [key: string]: any;
}) => {
  return (
    <button
      {...props}
      className={`${className} button ${ghost ? 'button--ghost' : ''} ${
        round ? 'button--round' : ''
      }`}
      onClick={() => onClick()}
    >
      {icon !== '' && !iconRight && (
        <Icon className="button__icon button__icon--left" icon={icon} />
      )}
      <span className="button__content">{children}</span>
      {icon !== '' && iconRight && (
        <Icon className="button__icon button__icon--right" icon={icon} />
      )}
    </button>
  );
};

export default Button;
