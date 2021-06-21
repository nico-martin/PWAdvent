import React from 'react';
import cn from '@utils/classnames';
import styles from './Snow.module.css';

const Snow = ({ className = '' }: { className?: string }) => (
  <div className={cn(className, styles.root)}>
    {['near', 'mid', 'far'].map((position) => (
      <React.Fragment key={position}>
        <div className={cn(styles.level, styles[`position-${position}`])} />
        <div
          className={cn(
            styles.level,
            styles[`position-${position}`],
            styles.levelAlt
          )}
        />
      </React.Fragment>
    ))}
  </div>
);

export default Snow;
