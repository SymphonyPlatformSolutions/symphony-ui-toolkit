import React from 'react';
import { Checkbox } from '../src/components';
import CheckboxStates from '../src/components/selection/CheckboxStates';
import { LabelPlacements } from '../src/components/selection/SelectionInput';
import { action } from '@storybook/addon-actions';

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
        <h3>Default checked state</h3>
        <p>
          In the following examples the states of the checkboxes have a default
          value defined with <strong>defaultSelectionState</strong> attribute.
        </p>
        <div>
          <Checkbox
            label="Checkbox 'on'"
            name="active-checkbox"
            value="active-checkbox-1"
            defaultSelectionState={CheckboxStates.CHECKED}
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox 'indeterminate'"
            name="active-checkbox"
            value="active-checkbox-2"
            defaultSelectionState={CheckboxStates.INDETERMINATE}
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox 'off'"
            name="active-checkbox"
            value="active-checkbox-3"
            defaultSelectionState={CheckboxStates.UNCHECKED}
          />
        </div>
      </div>
      <div>
        <h2>Disabled Checkbox</h2>
        <p>In the following examples the states of the checkboxes are fixed</p>
        <div>
          <Checkbox
            label="Checkbox"
            name="disabled-checkbox"
            value="disabled-checkbox-1"
            selectionState={CheckboxStates.CHECKED}
            disabled
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox"
            name="disabled-checkbox"
            value="disabled-checkbox-2"
            selectionState={CheckboxStates.INDETERMINATE}
            disabled
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox"
            name="disabled-checkbox"
            value="disabled-checkbox-3"
            selectionState={CheckboxStates.UNCHECKED}
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
          labelPlacement={LabelPlacements.TOP}
        ></Checkbox>
        <Checkbox
          label="Left"
          name="placement-label"
          value="left"
          labelPlacement={LabelPlacements.LEFT}
        ></Checkbox>
        <Checkbox
          label="bottom"
          name="placement-label"
          value="bottom"
          labelPlacement={LabelPlacements.BOTTOM}
        ></Checkbox>
        <Checkbox
          label="Right"
          name="placement-label"
          value="right"
          labelPlacement={LabelPlacements.RIGHT}
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
            label="Checkbox 1"
            name="a11y-checkbox"
            value="a11y-checkbox-1"
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox 2"
            name="a11y-checkbox"
            value="a11y-checkbox-2"
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox 3"
            name="a11y-checkbox"
            value="a11y-checkbox-3"
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox 4"
            name="a11y-checkbox"
            value="a11y-checkbox-4"
          />
        </div>
        <div>
          <Checkbox
            label="Checkbox 5"
            name="a11y-checkbox"
            value="a11y-checkbox-5"
          />
        </div>
      </div>
      <div>
        <h2>Controlled checked state</h2>
        <p>
          In the following example the state of the checkbox has a fixed value
          defined with <strong>selectionState</strong> attribute. This can be
          useful if you want the parent component to control the checked state
          of the checkbox. The Checkbox component will call the handleClick
          method of the parent component every time the user clicks, so the
          parent can do what it wants.
        </p>
        <div>
          <Checkbox
            label="Controlled Checkbox"
            name="controller-checkbox"
            value="controlled-checkbox-1"
            selectionState={CheckboxStates.CHECKED}
            handleClick={action('handleChange controlled-checkbox-1')}
          />
        </div>
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
        <div>
          <Checkbox
            label="Checkbox with actions"
            name="simple-checkbox-actions"
            value="checkbox-actions"
            handleChange={action('handleChange action')}
            handleClick={action('handleClick action')}
          />
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Checkbox',
  decorators: [],
};
