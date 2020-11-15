import React from 'react';

import {
  Button,
  Form,
  FormControls,
  FormField,
  FormFieldset,
  InputText,
  Notification,
} from '@theme';
import cn from '@utils/classnames';
import { apiBase } from '@utils/constants';

import './EmailSignup.css';

const EmailSignup = ({ className = '' }: { className?: string }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [formSuccess, setFormSuccess] = React.useState<string>('');
  const [formError, setFormError] = React.useState<string>('');

  return (
    <div className={cn(className, 'email-signup')}>
      <div className="email-signup__content">
        <p>
          Are you excited for Progressive Web Apps? Let's get ready for
          PWAdvent! 24 features in 24 days.
        </p>
        <p>
          Make sure to subscribe and get notified as soon as a new feature is
          published.
        </p>
      </div>
      {formError !== '' ? (
        <Notification className="email-signup__notification" type="error">
          {formError}
        </Notification>
      ) : formSuccess !== '' ? (
        <Notification className="email-signup__notification" type="success">
          {formSuccess}
        </Notification>
      ) : (
        <React.Fragment>
          <Form
            className="email-signup__form"
            onSubmit={async data => {
              setLoading(true);
              setFormSuccess('');
              setFormError('');

              try {
                const resp = await fetch(
                  `${apiBase}wp-json/advent-calendar/v1/email-notification/`,
                  {
                    method: 'post',
                    body: JSON.stringify({
                      email: data.email,
                      timezoneOffset: new Date().getTimezoneOffset(),
                    }),
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  }
                );
                if (resp.status === 409) {
                  setFormSuccess(
                    'Thank you very much. Your email has already been registered.'
                  );
                } else if (resp.status === 200) {
                  setFormSuccess(
                    'Thank you very much. You will receive an email shortly, in which you can confirm your address'
                  );
                } else {
                  new Error();
                }
              } catch (e) {
                setFormError(
                  'Oops.. Something went wrong. Please try again later.'
                );
              }
              setLoading(false);
            }}
          >
            <FormFieldset stacked>
              <FormField
                name="email"
                label="Email"
                component={InputText}
                disabled={loading}
                subtype="email"
                register={{
                  required: 'This value is required',
                  pattern: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'This needs to be a valid Email adress',
                  },
                }}
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
          <p className="email-signup__disclaimer">
            We use your email exclusively to send you the link to the published
            entry every morning between 2020-12-01 and 2020-12-24. You can
            cancel this service at any time, your data will not be passed on to
            third parties.
          </p>
        </React.Fragment>
      )}
    </div>
  );
};

export default EmailSignup;
