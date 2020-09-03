import { withKnobs, boolean, button, text } from '@storybook/addon-knobs';
import React from 'react';
import { Checkbox } from '../src/components';

export const Checkboxs: React.SFC = () => {
  return (
    <div style={{ width: '50%' }}>
      <h1>Checkbox</h1>
      <div>
        <h2>Default Checkbox</h2>
        <div>
          <Checkbox
            label="Checkbox"
            name="simple-checkbox"
            value="checkbox-1"
            checked
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox"
            name="simple-checkbox"
            value="checkbox-2"
          />
        </div>
      </div>
      <div>
        <h2>Disabled Checkbox</h2>
        <div>
          <Checkbox
            label="Checkbox"
            name="disabled-checkbox"
            value="Checkbox-Checked-Disabled"
            checked
            disabled
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox"
            name="disabled-checkbox"
            value="Checkbox-Unchecked-Disabled"
            disabled
          />
        </div>
      </div>
      <div>
        <h2>Label placements</h2>
        <Checkbox
          label="Top"
          name="placement-label"
          value="top"
          labelPlacement="top"
        ></Checkbox>
        <Checkbox
          label="Left"
          name="placement-label"
          value="left"
          labelPlacement="left"
        ></Checkbox>
        <Checkbox
          label="bottom"
          name="placement-label"
          value="bottom"
          labelPlacement="bottom"
        ></Checkbox>
        <Checkbox
          label="Right"
          name="placement-label"
          value="right"
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
