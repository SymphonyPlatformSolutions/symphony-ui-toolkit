import * as React from 'react';
import { useState } from 'react';
import { Switch } from '../src/components';
import LabelPlacements from '../src/components/selection/LabelPlacements';
import SelectionStatus from '../src/components/selection/SelectionStatus';
import { action } from '@storybook/addon-actions';

const Template = (args) => {
  return <Switch {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'simple-switch',
  value: 'switch-1',
  label: 'Switch',
};

export const Switches = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div style={{ width: '50%' }}>
      <h1>Switch</h1>
      <div>
        <h2>Default Switch</h2>
        <Switch label="Switch" name="simple-switch" value="switch-1" />
        <h2>Active Switch</h2>
        <h3>Default checked state</h3>
        <p>
          In the following examples the states of the switches have a default
          value defined with <strong>checked</strong> attribute.
        </p>
        <Switch
          label="Switch 'checked'"
          name="active-switch"
          value="active-switch-1"
          status={SelectionStatus.CHECKED}
          onChange={action('onChange active-switch-1')}
        />
        <Switch
          label="Switch by default"
          name="active-switch"
          value="active-switch-3"
        />
      </div>
      <div>
        <h2>Disabled Switch</h2>
        <p>In the following examples the states of the switches are fixed</p>
        <Switch
          label="Switch"
          name="disabled-switch"
          value="disabled-switch-1"
          status={SelectionStatus.CHECKED}
          disabled
        />
        <Switch
          label="Switch"
          name="disabled-switch"
          value="disabled-switch-2"
          status={SelectionStatus.MIXED}
          disabled
        />
        <Switch
          label="Switch"
          name="disabled-switch"
          value="disabled-switch-3"
          disabled
        />
      </div>
      <div>
        <h2>Label placements</h2>
        <p>
          The label can be positioned at the{' '}
          <strong>top, right, bottom, left</strong> of the switch
        </p>
        <div className="d-inline-block">
          <Switch
            label="Top"
            name="placement-label"
            value="top"
            labelPlacement={LabelPlacements.TOP}
          />
        </div>
        <div className="d-inline-block">
          <Switch
            label="Left"
            name="placement-label"
            value="left"
            labelPlacement={LabelPlacements.LEFT}
          />
        </div>
        <div className="d-inline-block">
          <Switch
            label="bottom"
            name="placement-label"
            value="bottom"
            labelPlacement={LabelPlacements.BOTTOM}
          />
        </div>
        <div className="d-inline-block">
          <Switch
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
          You can navigate between switches using <strong>Tab</strong> key or{' '}
          <strong>Shift + Tab</strong> keys
        </p>
        <p>
          Select or unselect switch with <strong>Space</strong> key
        </p>
        <Switch
          label="Switch 1"
          name="a11y-switch"
          value="a11y-switch-1"
        />
        <Switch
          label="Switch 2"
          name="a11y-switch"
          value="a11y-switch-2"
        />
        <Switch
          label="Switch 3"
          name="a11y-switch"
          value="a11y-switch-3"
        />
        <Switch
          label="Switch 4"
          name="a11y-switch"
          value="a11y-switch-4"
        />
        <Switch
          label="Switch 5"
          name="a11y-switch"
          value="a11y-switch-5"
        />
      </div>
      <div>
        <h2>Controlled checked state</h2>
        <p>
          In the following example the state of the switch has a value defined
          with <strong>status</strong> attribute. This can be useful if you want
          the parent component to control the checked state of the switch.
          Define the method <strong>onChange</strong> if you want to control the
          Switch component.
        </p>
        <Switch
          label="Controlled Switch"
          name="controller-switch"
          value="controlled-switch-1"
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
          on the Switch or Label. Note: this method is also called when the
          user select/unselect the Switch with the keyboard space key.
        </p>
        <p>
          <strong>onChange</strong>: This method is called when the value of the
          Switch changes.
        </p>
        <Switch
          label="Switch with actions"
          name="simple-switch-actions"
          value="switch-actions"
          onChange={action('onChange switch-actions')}
          onClick={action('onClick switch-actions')}
        />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Input/Switch',
  component: Switch,
};
