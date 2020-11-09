import React from 'react';
import {
  Button,
  Form,
  FormControls,
  FormField,
  FormFieldset,
  InputText,
  ShadowBox,
} from '@theme';
import cn from '@utils/classnames';

const EmailSignup = ({ className = '' }: { className?: string }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <div className={cn(className, 'email-signup')}>
      <p>
        Are you excited for Progressive Web Apps? Let's get ready for PWAdvent!
        24 features in 24 days.
      </p>
      <p>
        Make sure to subscribe and get notified as soon as a new feature is
        published.
      </p>
      <Form
        onSubmit={data => {
          setLoading(true);
          setTimeout(() => setLoading(false), 3000);
          console.log('DATA', data);
        }}
      >
        <FormFieldset stacked>
          <FormField
            name="regnumber"
            label=""
            component={InputText}
            disabled={loading}
          />
          <FormControls>
            <Button
              type="submit"
              loading={loading}
              disabled={loading}
              icon="mdi/send"
              iconRight
            >
              Submit
            </Button>
          </FormControls>
        </FormFieldset>
      </Form>
    </div>
  );
};

export default EmailSignup;
