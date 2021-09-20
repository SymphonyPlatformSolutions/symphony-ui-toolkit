import * as React from 'react';
import {
  Icon,
  TextEllipsis
} from '../src/components';

export default {
  title: 'Components/Text Ellipsis',
  component: TextEllipsis,
  argTypes: {
    tooltipProps: {
      description: 'See props in Tooltip'
    },
    rows: {
      control: {
        type: 'number'
      }
    },
  },
};

// eslint-disable-next-line react/display-name
const addExplanation = (explanation) => (Story) => (
  <div>
    <p>{explanation}</p>
    <Story />
  </div>
);

const Template = (args) => {
  return (
    <div>
      <h4>
        1 row ellipse - tooltip on hover
      </h4>
      <div style={{ background: 'grey', margin: '16px 0px', padding: '16px', width: '350px'}}>
        <TextEllipsis
          rows={ 1 }
          {...args}
        >
          { 'Really, really, really, really, really, really, long text that gets cut!' }
        </TextEllipsis>
      </div>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  children: 'Really, really, really, really, really, really, long text that gets cut!',
  rows: 1,
};

export const EllipseAfterTwoRows = (args) => {
  return (
    <div style={{ background: 'grey', margin: '16px 0px', padding: '16px', width: '350px'}}>
      <TextEllipsis
        rows={ 2 }
        {...args}
      >
        { 'Really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, really, long text that gets cut!' }
      </TextEllipsis>
    </div>
  )
}

export const TooltipNotAffectingStyling = (args) => {
  return (
    <div style={{ background: 'grey', display: 'flex', margin: '16px 0px', padding: '16px', width: '350px'}}>
      <TextEllipsis
        rows={ 1 }
        tooltipProps={{
          wrapperClassName: 'text-ellipsis-tooltip'
        }}
        {...args}
      >
        { 'Icon should be pushed to the right' }
      </TextEllipsis>
      <Icon iconName="community" style={{ paddingLeft: '8px' }}></Icon>
    </div>
  )
}

TooltipNotAffectingStyling.decorators = [addExplanation("Use the tooltip prop 'wrapperClassName' to change the styling of the wrapping tooltip element")]
