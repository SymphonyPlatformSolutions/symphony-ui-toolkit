import * as React from 'react';
import { SvgIcon } from '../src/components/icon';
import { ReactIcons } from './helpers/ListOfIcons'

export const Icons: React.FC = () => {
  return <div>
    { Object.entries(ReactIcons).map(([key, ReactIcon]) => {
      return (<div className="preview" key={ key }>
        <ReactIcon fill="white" height={ 24 } width={ 24 } />
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
