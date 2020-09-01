import { withKnobs, boolean, button, text } from '@storybook/addon-knobs';
import React from 'react';
import { Checkbox } from '../src/components';

export const Checkboxs: React.SFC = () => {
  return (
    <div style={{ width: '50%' }}>
      <h1>Checkbox</h1>
      <div>
        <p>Simple Checkbox Field</p>
        <Checkbox label="test" name="nametest" value="Yes"></Checkbox>
      </div>
      <div>
        <p>Label placement Checkbox Field</p>
        <Checkbox
          label="top"
          name="nametest"
          value="Yes"
          labelPlacement="top"
        ></Checkbox>
        <Checkbox
          label="left"
          name="nametest"
          value="Yes"
          labelPlacement="left"
        ></Checkbox>
        <Checkbox
          label="bottom"
          name="nametest"
          value="Yes"
          labelPlacement="bottom"
        ></Checkbox>
        <Checkbox
          label="right"
          name="nametest"
          value="Yes"
          labelPlacement="right"
        ></Checkbox>
      </div>
    </div>
  );
};

export default {
  title: 'Checkbox',
  decorators: [withKnobs],
};
