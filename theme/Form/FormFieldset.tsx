import React from 'react';
import cn from '@utils/classnames';
import styles from './FormFieldset.module.css';

const FormFieldset = ({
  className = '',
  label = '',
  children,
  stacked = false,
}: {
  className?: string;
  label?: string;
  children?: any;
  stacked?: boolean;
}) => (
  <div
    className={cn(styles.root, className, {
      [styles.isStacked]: stacked,
    })}
  >
    {label !== '' && <h2 className={styles.label}>{label}</h2>}
    <div className={styles.fields}>{children}</div>
  </div>
);

export default FormFieldset;
