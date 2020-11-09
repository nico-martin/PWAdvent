import React from 'react';
import Input from './Input';

const InputText = props =>
  Input({ ...props, type: 'text', subtype: props.type });

export default InputText;
