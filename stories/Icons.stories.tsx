import * as React from 'react';
import Icon from '../src/components/icon/Icon';
import NameOfIcons from '@symphony-ui/uitoolkit-styles/src/icons/tk-icons.codepoints.json';

const takeName = Object.keys(NameOfIcons);
const sortName = takeName.sort();

export const Icons: React.FC = () => (
  <div>
    {sortName.map((value, index) => {
      return (
        <div key={index} className="preview">
          <Icon iconName={value}></Icon>
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
