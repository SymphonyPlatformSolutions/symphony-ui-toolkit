import React from 'react';
import { Checkbox } from '../src/components';
import LabelPlacements from '../src/components/selection/LabelPlacements';
import { action } from '@storybook/addon-actions';

export const Checkboxes = () => {
  return (
    <div className="tk-text-color" style={{ width: '50%' }}>
      <h1>Checkbox</h1>
      <div>
        <h2>Default Checkbox</h2>
        <Checkbox label="Checkbox" name="simple-checkbox" value="checkbox-1" />
        <h2>Active Checkbox</h2>
        <h3>Default checked state</h3>
        <p>
          In the following examples the states of the checkboxes have a default
          value defined with <strong>defaultChecked</strong> attribute.
        </p>
        <Checkbox
          label="Checkbox 'on'"
          name="active-checkbox"
          value="active-checkbox-1"
          defaultChecked="checked"
        />
        <Checkbox
          label="Checkbox 'mixed'"
          name="active-checkbox"
          value="active-checkbox-2"
          defaultChecked="mixed"
        />
        <Checkbox
          label="Checkbox 'off'"
          name="active-checkbox"
          value="active-checkbox-3"
        />
      </div>
      <div>
        <h2>Disabled Checkbox</h2>
        <p>In the following examples the states of the checkboxes are fixed</p>
        <Checkbox
          label="Checkbox"
          name="disabled-checkbox"
          value="disabled-checkbox-1"
          checked="checked"
          disabled
        />
        <Checkbox
          label="Checkbox"
          name="disabled-checkbox"
          value="disabled-checkbox-2"
          checked="mixed"
          disabled
        />
        <Checkbox
          label="Checkbox"
          name="disabled-checkbox"
          value="disabled-checkbox-3"
          disabled
        />
      </div>
      <div>
        <h2>Label placements</h2>
        <p>
          The label can be positioned at the{' '}
          <strong>top, right, bottom, left</strong> of the checkbox
        </p>
        <div className="d-inline-block">
          <Checkbox
            label="Top"
            name="placement-label"
            value="top"
            labelPlacement={LabelPlacements.TOP}
          />
        </div>
        <div className="d-inline-block">
          <Checkbox
            label="Left"
            name="placement-label"
            value="left"
            labelPlacement={LabelPlacements.LEFT}
          />
        </div>
        <div className="d-inline-block">
          <Checkbox
            label="bottom"
            name="placement-label"
            value="bottom"
            labelPlacement={LabelPlacements.BOTTOM}
          />
        </div>
        <div className="d-inline-block">
          <Checkbox
            label="Right"
            name="placement-label"
            value="right"
            labelPlacement={LabelPlacements.RIGHT}
          />
        </div>
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
        <Checkbox
          label="Checkbox 1"
          name="a11y-checkbox"
          value="a11y-checkbox-1"
        />
        <Checkbox
          label="Checkbox 2"
          name="a11y-checkbox"
          value="a11y-checkbox-2"
        />
        <Checkbox
          label="Checkbox 3"
          name="a11y-checkbox"
          value="a11y-checkbox-3"
        />
        <Checkbox
          label="Checkbox 4"
          name="a11y-checkbox"
          value="a11y-checkbox-4"
        />
        <Checkbox
          label="Checkbox 5"
          name="a11y-checkbox"
          value="a11y-checkbox-5"
        />
      </div>
      <div>
        <h2>Controlled checked state</h2>
        <p>
          In the following example the state of the checkbox has a fixed value
          defined with <strong>checked</strong> attribute. This can be useful if
          you want the parent component to control the checked state of the
          checkbox. The Checkbox component will call the onClick method of the
          parent component every time the user clicks, so the parent can do what
          it wants.
        </p>
        <Checkbox
          label="Controlled Checkbox"
          name="controller-checkbox"
          value="controlled-checkbox-1"
          checked="checked"
          onClick={action('onClick controlled-checkbox-1')}
          onChange={action('onChange controlled-checkbox-1')}
        />
      </div>
      <div>
        <h2>Action</h2>
        <p>
          (<strong>Open the Actions tab to see the events.</strong>)
        </p>
        <p>
          <strong>handleChange</strong>: This method is called when the value of
          the Checkbox changes.
        </p>
        <p>
          <strong>handleClick</strong>: This method is called when the user
          clicks on the Checkbox or Label. Note: this method is also called when
          the user select/unselect the Checkbox with the keyboard space key.
        </p>
        <Checkbox
          label="Checkbox with actions"
          name="simple-checkbox-actions"
          value="checkbox-actions"
          onChange={action('onChange checkbox-actions')}
          onClick={action('onClick checkbox-actions')}
        />
      </div>
    </div>
  );
};

export default {
  title: 'Checkbox',
  decorators: [],
};
