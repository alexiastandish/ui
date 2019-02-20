import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';
import FormError from '../FormError';

const props = {
  formError: () => ({
    className: 'some-class',
    message: object('Error message (message)', {
      generic: 'Something went very terribly wrong.',
      fields: [
        { key: 'fieldkey', message: 'Please enter your name.' },
        {
          key: 'anotherfieldkey',
          message: 'The selected e-mail could not be validated.',
        },
      ],
    }),
    submitFailed: boolean('Submit failed (submitFailed)', true),
  }),
};

storiesOf('FormError', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['FormError-test'] })
  .add('Default (experimental)', () => <FormError {...props.formError()} />);
