import React from 'react';
import cn from '@utils/classnames';
import styles from './FormControls.module.css';

const FormControls = ({
  className = '',
  children,
}: {
  className?: string;
  children?: any;
}) => {
  return <div className={cn(styles.root, className)}>{children}</div>;
};

export default FormControls;
