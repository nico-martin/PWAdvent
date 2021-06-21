import React from 'react';
import Input from './Input';

const InputSelect = props =>
  Input({
    ...props,
    type: 'select',
    value: props.value in props.choices ? props.value : '',
  });

export default InputSelect;
