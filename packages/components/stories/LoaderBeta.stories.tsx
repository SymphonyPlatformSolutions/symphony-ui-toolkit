import * as React from 'react';
import { LoaderBeta } from '../src/components';

const Template = (args) => <LoaderBeta {...args} />;

export const Default = Template.bind({});
const loadingText = 'Loading...';
const value = 50;

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
          variant="default"
          loadingText={loadingText}
          direction={'vertical'}
          className="tk-ml-h"
        />
        <div>
          <LoaderBeta
            variant="default"
            loadingText={loadingText}
            direction={'horizontal'}
            className="tk-ml-2h"
          />
        </div>
      </div>
    </div>
    <div>
      <h2 className="tk-mt-4h">Determinate (spinner)</h2>
      <LoaderBeta
        variant="default"
        direction={'vertical'}
        className="tk-ml-h"
        progress="determinate"
      />
      <div>
        <h4 className="tk-mt-4h">With text</h4>
        <LoaderBeta
          variant="default"
          loadingText={loadingText}
          direction={'vertical'}
          className="tk-ml-h"
          progress="determinate"
        />
      </div>
    </div>
    <div>
      <h2 className="tk-mt-4h">Indeterminate (spinner)</h2>
      <LoaderBeta
        variant="default"
        direction={'vertical'}
        className="tk-ml-h"
        progress="indeterminate"
      />
      <div>
        <h4 className="tk-mt-4h">With text</h4>
        <LoaderBeta
          variant="default"
          loadingText={loadingText}
          direction={'vertical'}
          className="tk-ml-h"
          progress="indeterminate"
        />
      </div>
    </div>

    <div>
      <h2 className="tk-mt-4h">Determinate (linear)</h2>
      <LoaderBeta
        className="tk-ml-h"
        value={value}
        progress={'determinate'}
        type="linear"
      />
    </div>
    <div>
      <h4 className="tk-mt-4h">With text</h4>
      <LoaderBeta
        className="tk-ml-h"
        value={value}
        progress={'determinate'}
        loadingText={`${value}%`}
        type="linear"
      />
    </div>
    <div>
      <h2 className="tk-mt-4h">Indeterminate (linear)</h2>
      <LoaderBeta
        className="tk-ml-h"
        progress={'indeterminate'}
        type="linear"
      />
    </div>
    <h4 className="tk-mt-4h">With text</h4>
    <div>
      <LoaderBeta
        className="tk-ml-h"
        progress={'indeterminate'}
        loadingText="Loading..."
        type="linear"
      />
    </div>
  </>
);

export default {
  title: 'Components/LoaderBeta',
  component: LoaderBeta,
};
