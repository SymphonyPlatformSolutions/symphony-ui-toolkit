import * as React from 'react';
import Loader from '../src/components/loader';

const Template = (args) => <Loader {...args} />;

export const Default = Template.bind({});
const loadingText = 'Loading...';

export const Spinner: React.FC = () => (
  <>
    <div>
      <h2 className="tk-mt-4h">Variants</h2>
      <Loader variant="primary" className="tk-ml-h" />
      <Loader variant="attention" className="tk-ml-2h" />
      <Loader variant="warning" className="tk-ml-2h" />
      <Loader variant="ok" className="tk-ml-2h" />
    </div>
    <div>
      <h2 className="tk-mt-4h">Spinner with text</h2>
      <div className="tk-loader-container">
        <Loader
          variant="primary"
          loadingText={loadingText}
          loadingTextPos={'bottom'}
          className="tk-ml-h"
        />
        <div>
          <Loader
            variant="primary"
            loadingText={loadingText}
            loadingTextPos={'right'}
            className="tk-ml-2h"
          />
        </div>
      </div>
    </div>
  </>
);

export default {
  title: 'Components/Loader',
  component: Loader,
};
