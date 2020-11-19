import React from 'react';
import cn from '@utils/classnames';

import './Snow.css';

const Snow = ({ className = '' }: { className?: string }) => (
  <div className={cn(className, 'snow')}>
    {['near', 'mid', 'far'].map(position => (
      <React.Fragment key={position}>
        <div className={`snow__level snow__level--${position}`} />
        <div
          className={`snow__level snow__level--${position}  snow__level--alt`}
        />
      </React.Fragment>
    ))}
  </div>
);

export default Snow;
