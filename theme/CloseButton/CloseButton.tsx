import React from 'react';
import cn from '@utils/classnames';
import styles from './CloseButton.module.css';

const CloseButton = ({
  className = '',
  onClick,
}: {
  className?: string;
  onClick: Function;
}) => (
  <button className={cn(styles.root, className)} onClick={() => onClick()}>
    close
  </button>
);

export default CloseButton;
