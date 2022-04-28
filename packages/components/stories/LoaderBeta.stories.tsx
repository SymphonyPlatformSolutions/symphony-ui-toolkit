import * as React from 'react';
import { LoaderBeta } from '../src/components';

const Template = (args) => <LoaderBeta {...args} />;

export const Default = Template.bind({});
const loadingText = 'Loading...';

export const Spinner: React.FC = () => (
  <>
    <div>
      <h2 className="tk-mt-4h">Variants</h2>
      <LoaderBeta variant="default" className="tk-ml-h" />
      <LoaderBeta variant="primary" className="tk-ml-2h" />
      <LoaderBeta variant="attention" className="tk-ml-2h" />
      <LoaderBeta variant="warning" className="tk-ml-2h" />
      <LoaderBeta variant="ok" className="tk-ml-2h" />
    </div>
    <div>
      <h2 className="tk-mt-4h">Sizes</h2>
      <LoaderBeta variant="primary" className="tk-ml-h" size="small" />
      <LoaderBeta variant="primary" className="tk-ml-2h" size="medium" />
      <LoaderBeta variant="primary" className="tk-ml-2h" size="large" />
    </div>
    <div>
      <h2 className="tk-mt-4h">Spinner with text</h2>
      <div className="tk-loader-container">
        <LoaderBeta
          variant="primary"
          loadingText={loadingText}
          loadingTextPos={'bottom'}
          className="tk-ml-h"
        />
        <div>
          <LoaderBeta
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
  title: 'Components/LoaderBeta',
  component: LoaderBeta,
};
