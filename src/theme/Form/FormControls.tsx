import React from 'react';

import './FormControls.css';

const FormControls = ({
  className = '',
  children,
}: {
  className?: string;
  children?: any;
}) => {
  return <div className={`form-controls ${className}`}>{children}</div>;
};

export default FormControls;
