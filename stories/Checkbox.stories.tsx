import { withKnobs } from '@storybook/addon-knobs';
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
        <p>In the following examples the states of the checkboxes are fixed</p>
        <div>
          <Checkbox
            label="Checkbox 'on'"
            name="simple-checkbox"
            value="checkbox-1"
            checkedState="on"
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox 'indeterminate'"
            name="simple-checkbox"
            value="checkbox-2"
            checkedState="indeterminate"
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox 'off'"
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
        <p>
          The label can be positioned at the{' '}
          <strong>top, right, bottom, left</strong> of the checkbox
        </p>
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
      <div>
        <h2>Accessibility</h2>
        <p>
          You can navigate between checkboxes using <strong>Tab</strong> key or{' '}
          <strong>Shift + Tab</strong> keys
        </p>
        <p>
          Select or unselect checkbox with <strong>Space</strong> key
        </p>
        <div>
          <Checkbox
            label="Checkbox"
            name="simple-checkbox"
            value="checkbox-1"
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox"
            name="simple-checkbox"
            value="checkbox-2"
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox"
            name="simple-checkbox"
            value="checkbox-3"
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox"
            name="simple-checkbox"
            value="checkbox-4"
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox"
            name="simple-checkbox"
            value="checkbox-5"
          />
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Checkbox',
  decorators: [withKnobs],
};
