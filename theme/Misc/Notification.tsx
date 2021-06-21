import React from 'react';
import cn from '@utils/classnames';
import styles from './Notification.module.css';

const Notification = ({
  className = '',
  type = 'message',
  children,
}: {
  className?: string;
  type?: 'message' | 'success' | 'error';
  children: any;
}) => (
  <div className={cn(className, styles.root, styles[`type-${type}`])}>
    <p className={styles.text}>{children}</p>
  </div>
);

export default Notification;
