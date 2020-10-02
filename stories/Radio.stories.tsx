import React from 'react';
import { Radio } from '../src/components';
import { LabelPlacements } from '../src/components/selection/SelectionInput';
import { action } from '@storybook/addon-actions';

export const Radios: React.SFC = () => {
  return (
    <div className="tk-text-color" style={{ width: '50%' }}>
      <h1>Radio</h1>
      <div>
        <h2>Default Radio</h2>
        <div>
          <Radio label="Radio" name="simple-radio" value="radio-1" />
        </div>
        <h2>Active Checkbox</h2>
        <h3>Default checked state</h3>
        <p>
          In the following examples the states of the checkboxes have a default
          value defined with <strong>defaultChecked</strong> attribute.
        </p>
        <div>
          <Radio
            label="Radio 'on'"
            name="active-radio"
            value="active-radio-1"
            defaultChecked="checked"
          />
        </div>
        <div>
          <Radio
            label="Radio 'off'"
            name="active-radio"
            value="active-radio-2"
          />
        </div>
      </div>
      <div>
        <h2>Disabled Radio</h2>
        <p>In the following examples the states of the radio are fixed</p>
        <div>
          <Radio
            label="Radio"
            name="disabled-radio"
            value="disabled-radio-1"
            checked="checked"
            // selectionState={SelectionStates.CHECKED}
            disabled
          />
        </div>
        <div>
          <Radio
            label="Radio"
            name="disabled-radio"
            value="disabled-radio-2"
            disabled
          />
        </div>
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
        <p>
          Select radio with <strong>Space</strong> key
        </p>
        <div>
          <Radio label="Radio 1" name="a11y-radio" value="a11y-radio-1" />
        </div>
        <div>
          <Radio label="Radio 2" name="a11y-radio" value="a11y-radio-2" />
        </div>
        <div>
          <Radio label="Radio 3" name="a11y-radio" value="a11y-radio-3" />
        </div>
        <div>
          <Radio label="Radio 4" name="a11y-radio" value="a11y-radio-4" />
        </div>
        <div>
          <Radio label="Radio 5" name="a11y-radio" value="a11y-radio-5" />
        </div>
      </div>
      <div>
        <h2>Controlled checked state</h2>
        <p>
          In the following example the state of the radio has a fixed value
          defined with <strong>selectionState</strong> attribute. This can be
          useful if you want the parent component to control the checked state
          of the radio. The Radio component will call the handleClick method of
          the parent component every time the user clicks, so the parent can do
          what it wants.
        </p>
        <div>
          <Radio
            label="Controlled Radio"
            name="controlled-radio"
            value="controlled-radio-1"
            checked="checked"
            handleClick={action('handleChange controlled-radio-1')}
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
          the Radio changes.
        </p>
        <p>
          <strong>handleClick</strong>: This method is called when the user
          clicks on the Checkbox or Label. Note: this method is also called when
          the user select/unselect the Checkbox with the keyboard space key.
        </p>
        <div>
          <Radio
            label="Radio with actions"
            name="simple-radio-actions"
            value="radio-actions"
            handleChange={action('handleChange action')}
            handleClick={action('handleClick action')}
          />
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Radio',
  decorators: [],
};
