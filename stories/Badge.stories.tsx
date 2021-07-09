import * as React from 'react';
import { Badge, Icon } from '../src/components';
import '../src/styles';
import './stories.scss';

const Template = (args) => {
  return <Badge {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  children: 'Some Text',
  variant: ''
};

export const Badges: React.FC = () => (
  <div>
    <h2>Default</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Badge className="tk-mr-h">Badge</Badge>
      <Badge>
        <Icon iconName="lock" className="tk-mr-h"></Icon>
        Badge
      </Badge>
    </div>
    <h2>Positive</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Badge variant="positive" className="tk-mr-h">Badge</Badge>
      <Badge variant="positive">
        <Icon iconName="check" className="tk-mr-h"></Icon>
        Badge
      </Badge>
    </div>
    <h2>Neutral</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Badge variant="neutral" className="tk-mr-h">Badge</Badge>
      <Badge variant="neutral">
        <Icon iconName="announce" className="tk-mr-h"></Icon>
        Badge
      </Badge>
    </div>
    <h2>Attention</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Badge variant="attention" className="tk-mr-h">Badge</Badge>
      <Badge variant="attention">
        <Icon iconName="alert-round" className="tk-mr-h"></Icon>
        Badge
      </Badge>
    </div>
    <h2>Warning</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Badge variant="warning" className="tk-mr-h">Badge</Badge>
      <Badge variant="warning">
        <Icon iconName="alert-triangle" className="tk-mr-h"></Icon>
        Badge
      </Badge>
    </div>
    <h2>EXTernal</h2>
    <div style={{ display: 'flex', margin: 16 }}>
      <Badge variant="external" className="tk-mr-h">EXT</Badge>
    </div>
  </div>
);

export default {
  title: 'Components/Badge',
  component: Badge,
  subcomponents: { Icon },
};
