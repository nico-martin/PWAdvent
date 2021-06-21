import React from 'react';
import cn from '@utils/classnames';
import styles from './Loader.module.css';

const Loader = ({ className = '' }: { className?: string }) => (
  <div className={cn(styles.root, className)} />
);

export default Loader;
