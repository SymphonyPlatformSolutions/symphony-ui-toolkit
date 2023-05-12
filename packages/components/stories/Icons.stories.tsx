import * as React from 'react';
import { SvgIcon } from '../src/components/icon';
import { ReactIcons } from './helpers/ListOfIcons'
import { styled, useTheme } from '@storybook/theming';

export const Icons: React.FC = () => {
  const theme: any = useTheme();
  
  return <div>
    { Object.entries(ReactIcons).map(([key, ReactIcon]) => {
      const StyledReactIcon = styled(ReactIcon)`
        fill: ${theme.color.defaultText};
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

export default {
  title: 'Components/Icon',
  component: SvgIcon,
};
