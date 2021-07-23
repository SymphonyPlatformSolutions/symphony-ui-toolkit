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
};

export const DefaultVariant: React.FC = () => (
  <>
    <Badge variant="default" className="tk-mr-h">Badge</Badge>
    <Badge variant="default">
      <Icon iconName="bot" className="tk-mr-h"></Icon>
        Badge
    </Badge>
  </>);

export const Positive: React.FC = () => (
  <>
    <Badge variant="positive" className="tk-mr-h">Badge</Badge>
    <Badge variant="positive">
      <Icon iconName="announce" className="tk-mr-h"></Icon>
        Badge
    </Badge>
  </>);

export const Neutral: React.FC = () => (
  <>
    <Badge variant="neutral" className="tk-mr-h">Badge</Badge>
    <Badge variant="neutral">
      <Icon iconName="announce" className="tk-mr-h"></Icon>
        Badge
    </Badge>
  </>);

export const Attention: React.FC = () => (
  <>
    <Badge variant="attention" className="tk-mr-h">Badge</Badge>
    <Badge variant="attention">
      <Icon iconName="alert-round" className="tk-mr-h"></Icon>
        Badge
    </Badge>
  </>);

export const Warning: React.FC = () => (
  <>
    <Badge variant="warning" className="tk-mr-h">Badge</Badge>
    <Badge variant="warning">
      <Icon iconName="alert-triangle" className="tk-mr-h"></Icon>
        Badge
    </Badge>
  </>
);
export const EXTernal: React.FC = () => (
  <Badge variant="external" className="tk-mr-h">EXT</Badge>);

export const BadgeSizes: React.FC = () => (
  <>
    <Badge size="medium" className="tk-mr-h">Badge</Badge>
    <Badge size="small" className="tk-mr-h">Badge</Badge>
  </>);

export default {
  title: 'Components/Badge',
  component: Badge,
  subcomponents: { Icon },
};
