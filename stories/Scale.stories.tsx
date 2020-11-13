import * as React from 'react';
import { Button, Checkbox, Radio } from '../src/components';
import Icon from '../src/components/icon/Icon';
import './stories.scss';
import '../src/styles';
import Scale from '../src/core/hoc/Scale';

export const Size: React.SFC = () => (
  <div>
    <h1 className="tk-pt-2">Scaled Components</h1>
    <p>All the components from the UI Toolkit can be scaled. To scale a component you need to add the  <span className="tk-text-color--primary">Scale</span> component as the parent of any other component and indicate the prefered size.</p>
    <p>The possible <span className="tk-text-color--primary font-bold"><i>sizes</i></span> are: </p>
    <ul>
      <li>
        <code>xx-small</code>
      </li>
      <li>
        <code>x-small</code>
      </li>
      <li>
        <code>small</code>
      </li>
      <li>
        <code>medium</code> (value by default)
      </li>
      <li>
        <code>large</code>
      </li>
      <li>
        <code>x-large</code>
      </li>
      <li>
        <code>xx-large</code>
      </li>
    </ul>
    <div>See examples below.</div>
    <h2 className="tk-pt-2">Button</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Scale size="xx-small" className="tk-pr-1h">
        <Button variant="primary">xx-small</Button>
      </Scale>
      <Scale size="x-small" className="tk-pr-1h">
        <Button variant="primary">x-small</Button>
      </Scale>
      <Scale size="small" className="tk-pr-1h">
        <Button variant="primary">small</Button>
      </Scale>
      <Scale size="medium" className="tk-pr-1h">
        <Button variant="primary">medium</Button>
      </Scale>
      <Scale size="large" className="tk-pr-1h">
        <Button variant="primary">large</Button>
      </Scale>
      <Scale size="x-large" className="tk-pr-1h">
        <Button variant="primary">x-large</Button>
      </Scale>
      <Scale size="xx-large">
        <Button variant="primary">xx-large</Button>
      </Scale>
    </div>
    <h2 className="tk-pt-2">Radio button</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Scale size="xx-small" className="tk-pr-1h">
        <Radio label="xx-small" name="active-radio" value="active-radio-1" />
      </Scale>
      <Scale size="x-small" className="tk-pr-1h">
        <Radio label="x-small" name="active-radio" value="active-radio-1" />
      </Scale>
      <Scale size="small" className="tk-pr-1h">
        <Radio label="small" name="active-radio" value="active-radio-1" />
      </Scale>
      <Scale size="medium" className="tk-pr-1h">
        <Radio label="medium" name="active-radio" value="active-radio-1" />
      </Scale>
      <Scale size="large" className="tk-pr-1h">
        <Radio label="large" name="active-radio" value="active-radio-1" />
      </Scale>
      <Scale size="x-large" className="tk-pr-1h">
        <Radio label="x-large" name="active-radio" value="active-radio-1" />
      </Scale>
      <Scale size="xx-large">
        <Radio label="xx-large" name="active-radio" value="active-radio-1" />
      </Scale>
    </div>
    <h2 className="tk-pt-2">Checkbox</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Scale size="xx-small" className="tk-pr-1h">
        <Checkbox
          label="xx-small"
          name="size"
          value="xx-small"
        />
      </Scale>
      <Scale size="x-small" className="tk-pr-1h">
        <Checkbox
          label="x-small"
          name="size"
          value="x-small"
        />
      </Scale>
      <Scale size="small" className="tk-pr-1h">
        <Checkbox
          label="small"
          name="size"
          value="small"
        />
      </Scale>
      <Scale size="medium" className="tk-pr-1h">
        <Checkbox
          label="medium"
          name="size"
          value="medium"
        />
      </Scale>
      <Scale size="large" className="tk-pr-1h">
        <Checkbox
          label="large"
          name="size"
          value="large"
        />
      </Scale>
      <Scale size="x-large" className="tk-pr-1h">
        <Checkbox
          label="x-large"
          name="size"
          value="x-large"
        />
      </Scale>
      <Scale size="xx-large">
        <Checkbox
          label="xx-large"
          name="size"
          value="xx-large"
        />
      </Scale>
    </div>
    <h2 className="tk-pt-2">Icon</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Scale size="xx-small" className="tk-pr-1h">
        <Icon iconName="activity" />
      </Scale>
      <Scale size="x-small" className="tk-pr-1h">
        <Icon iconName="activity" />
      </Scale>
      <Scale size="small" className="tk-pr-1h">
        <Icon iconName="activity" />
      </Scale>
      <Scale size="medium" className="tk-pr-1h">
        <Icon iconName="activity" />
      </Scale>
      <Scale size="large" className="tk-pr-1h">
        <Icon iconName="activity" />
      </Scale>
      <Scale size="x-large" className="tk-pr-1h">
        <Icon iconName="activity" />
      </Scale>
      <Scale size="xx-large" className="tk-pr-5h">
        <Icon iconName="activity" />
      </Scale>
      <Scale size="xx-small" className="tk-pl-5h tk-pr-1h">
        <Icon iconName="food-an-drink" />
      </Scale>
      <Scale size="x-small" className="tk-pr-1h">
        <Icon iconName="food-an-drink" />
      </Scale>
      <Scale size="small" className="tk-pr-1h">
        <Icon iconName="food-an-drink" />
      </Scale>
      <Scale size="medium" className="tk-pr-1h">
        <Icon iconName="food-an-drink" />
      </Scale>
      <Scale size="large" className="tk-pr-1h">
        <Icon iconName="food-an-drink" />
      </Scale>
      <Scale size="x-large" className="tk-pr-1h">
        <Icon iconName="food-an-drink" />
      </Scale>
      <Scale size="xx-large">
        <Icon iconName="food-an-drink" />
      </Scale>
    </div>

  </div>
);

export default {
  title: 'Scaled components',
  component: Scale,
  subcomponents: { Icon }
};
