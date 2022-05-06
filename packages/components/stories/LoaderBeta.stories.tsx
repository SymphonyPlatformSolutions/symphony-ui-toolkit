import * as React from 'react';
import { Button, LoaderBeta } from '../src/components';

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
      <h2 className="tk-mt-4h">With text</h2>
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
      <h2 className="tk-mt-4h">Determinate</h2>
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
      <h2 className="tk-mt-4h">Indeterminate</h2>
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
  </>
);

export const Linear: React.FC = () => {
  const [value, setValue] = React.useState(0);
  let value1 = 0;

  let intervalId = null;

  function bip() {
    if (value1 <= 99) {
      value1++;
      setValue(value1);
    } else {
      clearInterval(intervalId);
    }
  }
  function start() {
    intervalId = setInterval(bip, 100);
  }

  return (
    <>
      <div>
        <h2 className="tk-mt-4h">Determinate</h2>
        <LoaderBeta
          className="tk-ml-h"
          value={50}
          progress={'determinate'}
          type="linear"
        />
      </div>
      <div>
        <h2 className="tk-mt-4h">Indeterminate</h2>
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
      <h2 className="tk-mt-4h">Dynamic determinate</h2>
      <div>
        <LoaderBeta
          className="tk-ml-h"
          progress={'determinate'}
          type="linear"
          value={value}
          loadingText={value + '%'}
        />
        <br />
        <Button onClick={start}>Click</Button>
      </div>
    </>
  );
};

export default {
  title: 'Components/LoaderBeta',
  component: LoaderBeta,
};
