import { withKnobs, boolean, button, text } from '@storybook/addon-knobs';
import React from 'react';
import { Checkbox } from '../src/components';

export const Checkboxes: React.SFC = () => {
  return (
    <div className="tk-text-color" style={{ width: '50%' }}>
      <h1>Checkbox</h1>
      <div>
        <h2>Default Checkbox</h2>
        <div>
          <Checkbox
            label="Checkbox"
            name="simple-checkbox"
            value="checkbox-1"
          />
        </div>
        <h2>Active Checkbox</h2>
        <div>
          <Checkbox
            label="Checkbox"
            name="simple-checkbox"
            value="checkbox-1"
            checkedState="on"
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox"
            name="simple-checkbox"
            value="checkbox-2"
            checkedState="indeterminate"
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox"
            name="simple-checkbox"
            value="checkbox-3"
            checkedState="off"
          />
        </div>
      </div>
      <div>
        <h2>Disabled Checkbox</h2>
        <div>
          <Checkbox
            label="Checkbox"
            name="simple-checkbox"
            value="checkbox-1"
            checkedState="on"
            disabled
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox"
            name="simple-checkbox"
            value="checkbox-2"
            checkedState="indeterminate"
            disabled
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox"
            name="simple-checkbox"
            value="checkbox-3"
            checkedState="off"
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
