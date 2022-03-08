import * as React from 'react';
import { useState } from 'react';
import { Radio } from '../src/components';
import LabelPlacements from '../src/components/selection/LabelPlacements';
import { action } from '@storybook/addon-actions';
import SelectionStatus from '../src/components/selection/SelectionStatus';
import { SelectionInput } from '../src/components/selection/SelectionInput';

const Template = (args: SelectionStatus) => (<Radio {...args} />);

export const Default = Template.bind({});
Default.args = {
  name: 'simple-radio',
  value: 'radio-1',
  label: 'radio',
};

export const Radios = () => {
  const [radioChecked, setRadioChecked] = useState('controlled-radio-2');

  return (
    <div style={{ width: '50%' }}>
      <h1>Radio</h1>
      <div>
        <h2>Active Radio</h2>
        <Radio label="Radio" name="active-radio" value="active-radio-1" />
        <Radio label="Radio" name="active-radio" value="active-radio-2" />
      </div>
      <div>
        <h2>Disabled Radio</h2>
        <p>In the following examples the states of the radio are fixed</p>
        <Radio
          label="Radio"
          name="disabled-radio"
          value="disabled-radio-1"
          status={SelectionStatus.CHECKED}
          disabled
        />
        <Radio
          label="Radio"
          name="disabled-radio"
          value="disabled-radio-2"
          disabled
        />
      </div>
      <div>
        <h2>Label placements</h2>
        <p>
          The label can be positioned at the{' '}
          <strong>top, right, bottom, left</strong> of the radio
        </p>
        <div className="d-inline-block">
          <Radio
            label="Top"
            name="placement-label"
            value="top"
            labelPlacement={LabelPlacements.TOP}
          />
        </div>
        <div className="d-inline-block">
          <Radio
            label="Left"
            name="placement-label"
            value="left"
            labelPlacement={LabelPlacements.LEFT}
          />
        </div>
        <div className="d-inline-block">
          <Radio
            label="bottom"
            name="placement-label"
            value="bottom"
            labelPlacement={LabelPlacements.BOTTOM}
          />
        </div>
        <div className="d-inline-block">
          <Radio
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
          You can navigate between radio using <strong>arrow</strong> keys
        </p>
        <Radio label="Radio 1" name="a11y-radio" value="a11y-radio-1" />
        <Radio label="Radio 2" name="a11y-radio" value="a11y-radio-2" />
        <Radio label="Radio 3" name="a11y-radio" value="a11y-radio-3" />
        <Radio label="Radio 4" name="a11y-radio" value="a11y-radio-4" />
        <Radio label="Radio 5" name="a11y-radio" value="a11y-radio-5" />
      </div>
      <div>
        <h2>Controlled checked state</h2>
        <p>
          In the following example the state of the radio has a value defined
          with <strong>status</strong> attribute. This can be useful if you want
          the parent component to control the checked state of the radio. Define
          the method <strong>onChange</strong> if you want to control the Radio
          component.
        </p>
        <Radio
          label="Controlled Radio 1"
          name="controlled-radio"
          value="controlled-radio-1"
          status={
            radioChecked === 'controlled-radio-1'
              ? SelectionStatus.CHECKED
              : SelectionStatus.UNCHECKED
          }
          onChange={() => setRadioChecked('controlled-radio-1')}
        />
        <Radio
          label="Controlled Radio 2"
          name="controlled-radio"
          value="controlled-radio-2"
          status={
            radioChecked === 'controlled-radio-2'
              ? SelectionStatus.CHECKED
              : SelectionStatus.UNCHECKED
          }
          onChange={() => setRadioChecked('controlled-radio-2')}
        />
      </div>
      <div>
        <h2>Action</h2>
        <p>
          (<strong>Open the Actions tab to see the events.</strong>)
        </p>
        <p>
          <strong>onClick</strong>: This method is called when the user clicks
          on the Radio or Label.
        </p>
        <p>
          <strong>onChange</strong>: This method is called when the value of the
          Radio changes.
        </p>
        <Radio
          label="Radio with actions"
          name="simple-radio-actions"
          value="radio-actions-1"
          onClick={action('onClick radio-actions-1')}
          onChange={action('onChange radio-actions-1')}
        />
        <Radio
          label="Radio with actions"
          name="simple-radio-actions"
          value="radio-actions-2"
          onClick={action('onClick radio-actions-2')}
          onChange={action('onChange radio-actions-2')}
        />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Input/Radio',
  component: Radio,
  subcomponents: { SelectionInput }
};
