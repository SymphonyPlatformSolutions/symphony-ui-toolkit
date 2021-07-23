import * as React from 'react';
import {
  TextEllipsis
} from '../src/components';

export default {
  title: 'Components/Ellipsed Text',
  component: TextEllipsis,
};

const Template = (args) => {
  return (
    <div>
      <TextEllipsis tooltipContent={ 'asdasd '} expand={ true} rows={ 1 } {...args}>
        { 'Hello Axel, here is a really, really long text!'}
      </TextEllipsis>
    </div>
  );
};

export const Default = Template.bind({});

export const TextConstrainedBy100pxContainer = (args) => {
  return (
    <div style={{ width: '100px'}}>
      <TextEllipsis {...args} tooltipContent={ 'asdasd '} expand={ true} rows={ 1 } >
        { 'Hello Axel, here is a really, really long text!'}
      </TextEllipsis>
    </div>
  )
}

