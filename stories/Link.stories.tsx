import * as React from 'react';
import { Icon, Link } from '../src/components';

const Template = (args) => {
  return <Link {...args}/>;
};

export const Default = Template.bind({});

Default.args = {
  url: 'https://www.symphony.com',
  children: <Icon iconName={'check'}/>
};

export const Links: React.FC = () => (
  <div>
    <h3>URL link</h3>
    <Link url={'https://www.symphony.com'}/><br/><br/>
    <h3>Icon link</h3>
    <Link url={'https://www.symphony.com'}><Icon iconName={'check'}/></Link><br/><br/>
    <h3>Text link</h3>
    <Link url={'https://www.symphony.com'}>Learn More</Link><br/><br/>
  </div>
)

export default {
  title: 'Link',
  component: Link,
}
