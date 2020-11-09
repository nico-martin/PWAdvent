import React from 'react';
import Input from './Input';

const InputTextarea = props =>
  Input({ ...props, type: 'textarea', subtype: props.type });

export default InputTextarea;
