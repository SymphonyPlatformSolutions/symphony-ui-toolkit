import '../src/styles';
import './stories.css';

import * as React from 'react';
import { SvgIcon } from '../src/components/icon';
import { ReactIcons } from './helpers/ListOfIcons'
import { styled } from '@storybook/theming';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SvgIcon> = {
  component: SvgIcon,
  title: 'Components/Icon',
} satisfies Meta<typeof SvgIcon>;
      
export default meta;
type Story = StoryObj<typeof SvgIcon>

export const Icons: Story = {
  render: () => {
    return <div>
      { Object.entries(ReactIcons).map(([key, ReactIcon]) => {
        const StyledReactIcon = styled(ReactIcon)`
        fill: dimgrey;
        height: 24px;
        width: 24px;
        `
        return (<div className="preview" key={ key }>
          <StyledReactIcon/>
          <br/>
          <span>{ key }</span>
        </div>
        )
      })}
    </div>
  }
}
