import * as React from 'react';
import Loader from '../src/components/loader';
import Scale from '../src/core/hoc/Scale';

const Template = (args) => {
  return <Loader {...args} />;
};

export const Default = Template.bind({});

export const Spinner: React.FC = () => (
  <div>
    <h2 className="tk-mt-4h">Variants</h2>
    <Loader variant="primary" className="tk-ml-h" />
    <Loader variant="attention" className="tk-ml-2h" />
    <Loader variant="warning" className="tk-ml-2h" />
    <Loader variant="ok" className="tk-ml-2h" />
    <h2 className="tk-mt-4h">Sizes</h2>
    <p>You can use the Scale component to display the loading in different sizes: </p>
    <Scale size="x-small" className="tk-pr-2h">
      <Loader className="tk-ml-h" />
    </Scale>
    <Scale size="small" className="tk-pr-2h">
      <Loader className="tk-ml-h" />
    </Scale>
    <Scale size="medium" className="tk-pr-2h">
      <Loader className="tk-ml-h" />
    </Scale>
    <Scale size="large" className="tk-pr-2h">
      <Loader className="tk-ml-h" />
    </Scale>
    <Scale size="x-large" className="tk-pr-2h">
      <Loader className="tk-ml-h" />
    </Scale>
    <Scale size="xx-large" className="tk-pr-2h">
      <Loader className="tk-ml-h" />
    </Scale>
  </div>
);

export default {
  title: 'Loader',
  component: Loader,
};
