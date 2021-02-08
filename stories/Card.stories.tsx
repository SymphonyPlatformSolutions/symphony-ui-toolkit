import * as React from 'react';
import { Button, Card, Typography } from '../src/components';
import Scale from '../src/core/hoc/Scale';

const Template = (args) => {
  return <Card {...args}></Card>;
};

export const Default = Template.bind({});

Default.args = {
  children:'Card title',
  className:'tk-p-1'
};

const cardContent: React.ReactNode =  
  <div className="tk-m-1">  
    <Typography variant="bold">Card title</Typography>
    <div className="tk-pb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    <Scale size="x-small">
      <Button>Button</Button>
    </Scale>
  </div>;

export const Content = Template.bind({});
Content.args = {
  children: cardContent,
};

export default {
  title: 'Components/Containers/Card',
};