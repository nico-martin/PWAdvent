import React from 'react';
import { ConnectForm } from './ConnectForm';
import styles from './FormField.module.css';
import InputText from './Input';

const FormField = ({
  name,
  label,
  component = InputText,
  register: fieldRegister,
  className = '',
  classNameLabel = '',
  classNameInput = '',
  wide = false,
  ...props
}: {
  name: string;
  label: string;
  component?: any;
  register?: any;
  className?: string;
  classNameLabel?: string;
  classNameInput?: string;
  wide?: boolean;
  [k: string]: any;
}) => (
  <ConnectForm>
    {({ register, errors }) => {
      return component({
        ...props,
        name,
        id: name,
        label,
        ref: register(fieldRegister),
        className: className,
        classNameInput: classNameInput,
        classNameLabel: classNameLabel,
        error: errors[name] ? errors[name].message : '',
      });
    }}
  </ConnectForm>
);

export default FormField;
