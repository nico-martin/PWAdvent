import React from 'react';
import cn from '@utils/classnames';
import { Loader, Icon } from '../index';
import styles from './Button.module.css';

const Button = ({
  children = '',
  className = '',
  onClick = () => {},
  layout = 'solid',
  round = false,
  icon = '',
  iconRight = false,
  iconCircle = false,
  size = 'medium',
  loading = false,
  disabled = false,
  color = 'black',
  zeroPadding = false,
  fontWeight = 'bold',
  ...props
}: {
  children?: any;
  className?: string;
  onClick?: Function;
  layout?: 'solid' | 'ghost' | 'empty';
  round?: boolean;
  icon?: string;
  iconRight?: boolean;
  iconCircle?: boolean;
  size?: 'medium' | 'small' | 'large';
  loading?: boolean;
  disabled?: boolean;
  color?: 'black' | 'red';
  zeroPadding?: boolean;
  fontWeight?: 'normal' | 'bold';
  [key: string]: any;
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={cn(
        className,
        styles.button,
        styles[`type-${layout}`],
        styles[`size-${size}`],
        styles[`color-${color}`],
        styles[`fontWeight-${fontWeight}`],
        {
          [styles.isRound]: round,
          [styles.isLoading]: loading,
          [styles.isDisabled]: disabled,
          [styles.zeropadding]: zeroPadding,
        }
      )}
      onClick={() => onClick()}
    >
      <Loader className={styles.loader} />
      {icon !== '' && !iconRight && (
        <Icon
          className={cn(styles.icon, styles.iconLeft)}
          icon={icon}
          circle={iconCircle}
        />
      )}
      <span className={styles.content}>{children}</span>
      {icon !== '' && iconRight && (
        <Icon
          className={cn(styles.icon, styles.iconRight)}
          icon={icon}
          circle={iconCircle}
        />
      )}
    </button>
  );
};

export default Button;
