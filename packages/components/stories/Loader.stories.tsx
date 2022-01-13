import * as React from 'react';
import Loader from '../src/components/loader';

const Template = (args) => (<Loader {...args} />);

export const Default = Template.bind({});

export const Spinner: React.FC = () => (
  <div>
    <h2 className="tk-mt-4h">Variants</h2>
    <Loader variant="primary" className="tk-ml-h" />
    <Loader variant="attention" className="tk-ml-2h" />
    <Loader variant="warning" className="tk-ml-2h" />
    <Loader variant="ok" className="tk-ml-2h" />
  </div>
);

export default {
  title: 'Components/Loader',
  component: Loader,
};
