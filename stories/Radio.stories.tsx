import * as React from 'react';
import { Radio } from '../src/components';
import LabelPlacements from '../src/components/selection/LabelPlacements';
import { action } from '@storybook/addon-actions';
import SelectionStatus from '../src/components/selection/SelectionStatus';

export const Radios = () => {
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
          ></Radio>
        </div>
        <div className="d-inline-block">
          <Radio
            label="Left"
            name="placement-label"
            value="left"
            labelPlacement={LabelPlacements.LEFT}
          ></Radio>
        </div>
        <div className="d-inline-block">
          <Radio
            label="bottom"
            name="placement-label"
            value="bottom"
            labelPlacement={LabelPlacements.BOTTOM}
          ></Radio>
        </div>
        <div className="d-inline-block">
          <Radio
            label="Right"
            name="placement-label"
            value="right"
            labelPlacement={LabelPlacements.RIGHT}
          ></Radio>
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
          In the following example the state of the radio has a fixed value
          defined with <strong>checked</strong> attribute. This can be useful if
          you want the parent component to control the checked state of the
          radio.
        </p>
        <Radio
          label="Controlled Radio"
          name="controlled-radio"
          value="controlled-radio-1"
          status={SelectionStatus.CHECKED}
          onChange={action('onChange controlled-radio-1')}
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
  title: 'Radio',
  component: Radio,
  decorators: [],
};
