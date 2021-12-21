import * as React from 'react';
import Icon from '../src/components/icon/Icon';
import IconCodepoints from '@symphony-ui/uitoolkit-styles/src/icons/tk-icons.codepoints.json';
import { TkIcon } from '@symphony-ui/uitoolkit-styles/dist/fonts/tk-icons';

const iconNames  = Object.keys(IconCodepoints).sort();
export const Icons: React.FC = () => (
  <div>
    {iconNames.map((value, index) => {
      return (
        <div key={index} className="preview">
          <Icon iconName={value as TkIcon}></Icon>
          <br></br>
          <span>{value}</span>
        </div>
      );
    })}
  </div>
);

export default {
  title: 'Components/Icon',
  component: Icon,
};
