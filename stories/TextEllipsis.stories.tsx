import * as React from 'react';
import {
  TextEllipsis
} from '../src/components';

export default {
  title: 'Components/Text Ellipsis',
  component: TextEllipsis,
};

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

export const TextNotConstrainedByContainer = (args) => {
  return (
    <div style={{ background: 'grey', margin: '16px 0px', padding: '16px', width: '350px'}}>
      <TextEllipsis
        rows={ 1 }
        {...args}
      >
        { 'Really, really, really long text that gets cut!' }
      </TextEllipsis>
    </div>
  )
}

