import React from 'react';
import { useForm, FormContext } from 'react-hook-form';

const Form = ({
  onSubmit,
  className,
  children,
  ...props
}: {
  onSubmit: Function;
  className?: string;
  children?: any;
}) => {
  // @ts-ignore
  const methods = useForm();

  return (
    <FormContext {...methods}>
      <form
        onSubmit={methods.handleSubmit(v => onSubmit(v))}
        className={`${className} form`}
        {...props}
      >
        {children}
      </form>
    </FormContext>
  );
};

export default Form;
