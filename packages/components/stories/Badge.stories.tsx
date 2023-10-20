/* eslint-disable react/display-name */
import '../src/styles';
import './stories.css';

import * as React from 'react';
import { Badge, Icon } from '../src/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Components/Badge'
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>

export const DefaultVariant: Story = {
  render: () => <>
    <Badge variant="default" className="tk-mr-h">Badge</Badge>
    <Badge variant="default">
      <Icon iconName="bot" className="tk-mr-h"></Icon>
    Badge
    </Badge>
  </>
}

export const Positive: Story = {
  render: () => <>
    <Badge variant="positive" className="tk-mr-h">Badge</Badge>
    <Badge variant="positive">
      <Icon iconName="announce" className="tk-mr-h"></Icon>
      Badge
    </Badge>
  </>
};

export const Neutral: Story = {
  render: () => <>
    <Badge variant="neutral" className="tk-mr-h">Badge</Badge>
    <Badge variant="neutral">
      <Icon iconName="announce" className="tk-mr-h"></Icon>
      Badge
    </Badge>
  </>
}

export const Attention: Story = {
  render: () => <>
    <Badge variant="attention" className="tk-mr-h">Badge</Badge>
    <Badge variant="attention">
      <Icon iconName="alert-round" className="tk-mr-h"></Icon>
      Badge
    </Badge>
  </>
}

export const Warning: Story = {
  render: () => <>
    <Badge variant="warning" className="tk-mr-h">Badge</Badge>
    <Badge variant="warning">
      <Icon iconName="alert-triangle" className="tk-mr-h"></Icon>
      Badge
    </Badge>
  </>
};

export const EXTernal: Story = {
  render: () => <Badge variant="external" className="tk-mr-h">EXT</Badge>
}

export const BadgeSizes: Story = {
  render: () => <>
    <div>
      <Badge size="medium" className="tk-mr-h">Badge</Badge>
      <Badge size="small" className="tk-mr-h">Badge</Badge>
      <Badge size="small">
        <Icon iconName="bot" className="tk-mr-h"></Icon>
        Badge
      </Badge>
    </div>
    <div className="tk-mt-h">
      <Badge variant="positive" size="medium" className="tk-mr-h">Badge</Badge>
      <Badge variant="positive" size="small" className="tk-mr-h">Badge</Badge>
      <Badge size="small" variant="positive">
        <Icon iconName="announce" className="tk-mr-h"></Icon>
        Badge
      </Badge>
    </div>
    <div className="tk-mt-h">
      <Badge variant="neutral" size="medium" className="tk-mr-h">Badge</Badge>
      <Badge variant="neutral" size="small" className="tk-mr-h">Badge</Badge>
      <Badge size="small" variant="neutral">
        <Icon iconName="announce" className="tk-mr-h"></Icon>
        Badge
      </Badge>
    </div>
    <div className="tk-mt-h">
      <Badge variant="attention" size="medium" className="tk-mr-h">Badge</Badge>
      <Badge variant="attention" size="small" className="tk-mr-h">Badge</Badge>
      <Badge size="small" variant="attention">
        <Icon iconName="alert-round" className="tk-mr-h"></Icon>
        Badge
      </Badge>
    </div>
    <div className="tk-mt-h">
      <Badge variant="warning" size="medium" className="tk-mr-h">Badge</Badge>
      <Badge variant="warning" size="small" className="tk-mr-h">Badge</Badge>
      <Badge size="small" variant="warning">
        <Icon iconName="alert-triangle" className="tk-mr-h"></Icon>
        Badge
      </Badge>
    </div>
    <div className="tk-mt-h">
      <Badge variant="external" size="medium" className="tk-mr-h">Badge</Badge>
      <Badge variant="external" size="small" className="tk-mr-h">Badge</Badge>
      <Badge variant="external" size="small">
        <Icon iconName="bot" className="tk-mr-h"></Icon>
        Badge
      </Badge>
    </div>
  </>
}
