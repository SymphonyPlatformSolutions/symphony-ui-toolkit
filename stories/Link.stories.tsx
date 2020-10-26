import * as React from 'react';
import { Icon, Link } from '../src/components';

export const Links: React.FC = () => (
  <div className="tk-text-color">
    <h3>URL link</h3>
    <Link url={'https://www.symphony.com'}/><br/><br/>
    <h3>Icon link</h3>
    <Link url={'https://www.symphony.com'}><Icon iconName={'redirect'}/></Link><br/><br/>
    <h3>Text link</h3>
    <Link url={'https://www.symphony.com'}>Learn More</Link><br/><br/>
  </div>
)

export default {
  title: 'Link',
  component: Link,
}
