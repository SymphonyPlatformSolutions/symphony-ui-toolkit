import * as React from 'react';
import { useState } from 'react';
import { Checkbox } from '../src/components';
import LabelPlacements from '../src/components/selection/LabelPlacements';
import SelectionStatus from '../src/components/selection/SelectionStatus';
import { action } from '@storybook/addon-actions';
import { SelectionInput, SelectionInputProps } from '../src/components/selection/SelectionInput';

const Template = (args: SelectionInputProps) => (<Checkbox {...args} />);

export const Default = Template.bind({});
Default.args = {
  name: 'simple-checkbox',
  value: 'checkbox-1',
  label: 'Checkbox',
};

export const Checkboxes = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div style={{ width: '50%' }}>
      <h1>Checkbox</h1>
      <div>
        <h2>Default Checkbox</h2>
        <Checkbox label="Checkbox" name="simple-checkbox" value="checkbox-1" />
        <h2>Active Checkbox</h2>
        <h3>Default checked state</h3>
        <p>
          A <i>checked</i> or a <i>mixed</i> checkbox generates a <strong>checked</strong> input value.
        </p>
        <Checkbox
          label="Checkbox 'checked'"
          name="active-checkbox"
          value="active-checkbox-1"
          status={SelectionStatus.CHECKED}
        />
        <Checkbox
          label="Checkbox 'mixed'"
          name="active-checkbox"
          value="active-checkbox-2"
          status={SelectionStatus.MIXED}
        />
        <Checkbox
          label="Checkbox by default"
          name="active-checkbox"
          value="active-checkbox-3"
        />
      </div>
      <div>
        <h2>Disabled Checkbox</h2>
        <p>In the following examples the states of the checkboxes are disabled</p>
        <Checkbox
          label="Checkbox"
          name="disabled-checkbox"
          value="disabled-checkbox-1"
          status={SelectionStatus.CHECKED}
          disabled
        />
        <Checkbox
          label="Checkbox"
          name="disabled-checkbox"
          value="disabled-checkbox-2"
          status={SelectionStatus.MIXED}
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
        <h2>Error Checkbox</h2>
        <p>In the following examples the checkboxes are wrapped around a Validation component that is in error</p>
        <span className="tk-validation--error">
          <Checkbox
            label="Checkbox 'checked'"
            name="active-checkbox"
            value="active-checkbox-1"
            status={SelectionStatus.CHECKED}
          />
        </span>
        <span className="tk-validation--error">
          <Checkbox
            label="Checkbox 'mixed'"
            name="active-checkbox"
            value="active-checkbox-2"
            status={SelectionStatus.MIXED}
          />
        </span>
        <span className="tk-validation--error">
          <Checkbox
            label="Checkbox by default"
            name="active-checkbox"
            value="active-checkbox-3"
          />
        </span>
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
          In the following example the state of the checkbox has a value defined
          with <strong>status</strong> attribute. This can be useful if you want
          the parent component to control the checked state of the checkbox.
          Define the method <strong>onChange</strong> if you want to control the
          Checkbox component.
        </p>
        <Checkbox
          label="Controlled Checkbox"
          name="controller-checkbox"
          value="controlled-checkbox-1"
          status={
            isChecked ? SelectionStatus.CHECKED : SelectionStatus.UNCHECKED
          }
          onChange={() => setIsChecked(!isChecked)}
        />
      </div>
      <div>
        <h2>Action</h2>
        <p>
          (<strong>Open the Actions tab to see the events.</strong>)
        </p>
        <p>
          <strong>onClick</strong>: This method is called when the user clicks
          on the Checkbox or Label. Note: this method is also called when the
          user select/unselect the Checkbox with the keyboard space key.
        </p>
        <p>
          <strong>onChange</strong>: This method is called when the value of the
          Checkbox changes.
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
  title: 'Components/Input/Checkbox',
  component: Checkbox,
  subcomponents: { SelectionInput }
};
