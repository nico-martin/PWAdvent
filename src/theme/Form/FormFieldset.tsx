import React from 'react';
import cn from '@utils/classnames';

import './FormFieldset.css';

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
    className={cn('form-fieldset', className, {
      'form-fieldset--stacked': stacked,
    })}
  >
    {label !== '' && <h2 className="form-fieldset__legend">{label}</h2>}
    <div className="form-fieldset__fields">{children}</div>
  </div>
);

export default FormFieldset;
