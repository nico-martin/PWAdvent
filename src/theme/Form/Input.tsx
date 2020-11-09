import React from 'react';

import './Input.css';

const Input = ({
  name,
  id,
  label,
  className = '',
  classNameLabel = '',
  classNameInput = '',
  type = 'text',
  subtype = 'text',
  value: initialValue = '',
  choices = {},
  error = '',
  onChange = () => {},
  onValueChanged = () => {},
  ...props
}: {
  name: string;
  id: string;
  className?: string;
  classNameLabel?: string;
  classNameInput?: string;
  label: string;
  type?: 'text' | 'textarea' | 'select';
  subtype?: string;
  value?: string;
  choices?: {
    [k: string]: string;
  };
  error?: string;
  onChange?: Function;
  onValueChanged?: Function;
  [k: string]: any;
}) => {
  const [value, setValue] = React.useState(initialValue);
  const prevValue = React.useRef(null);

  const inputProps = {
    ...props,
    className: `${classNameInput} input__element input__element--${type} input__element--${
      value !== '' ||
      (type === 'select' &&
        Object.values(choices).length &&
        Object.values(choices)[0] !== '')
        ? 'value'
        : 'empty'
    }`,
    name,
    id,
    onChange: e => {
      onChange(e);
      setValue(e.target.value);
    },
  };

  React.useEffect(() => {
    onValueChanged && onValueChanged(value, prevValue.current);
    prevValue.current = value;
  }, [value]);

  return (
    <div
      className={`${className} input input--${type} ${
        error !== '' ? 'input--error' : ''
      }`}
    >
      <label className={`${classNameLabel} input__label`} htmlFor={id}>
        {label}
      </label>
      {type === 'textarea' && <textarea {...inputProps}>{value}</textarea>}
      {type === 'text' && (
        <input type={subtype} {...inputProps} {...(value ? { value } : {})} />
      )}
      {type === 'select' && (
        <select {...inputProps}>
          {Object.entries(choices).map(([key, val]) => (
            <option key={key} selected={key === value}>
              {val}
            </option>
          ))}
        </select>
      )}
      {error !== '' && <span className="input__error">{error}</span>}
    </div>
  );
};

export default Input;
