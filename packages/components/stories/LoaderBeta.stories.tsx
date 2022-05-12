import * as React from 'react';
import { Button, LoaderBeta } from '../src/components';

const Template = (args) => <LoaderBeta {...args} />;

export const Default = Template.bind({});
const loadingText = 'Loading...';

export const Spinner: React.FC = () => {
  const [value, setValue] = React.useState(0);
  let value1 = 0;

  let intervalId = null;

  function count() {
    if (value1 <= 99) {
      value1++;
      setValue(value1);
    } else {
      clearInterval(intervalId);
    }
  }
  function start() {
    intervalId = setInterval(count, 100);
  }
  return (
    <>
      <h2 className="tk-mt-4h">Variants</h2>
      <div style={{ display: 'flex' }}>
        <LoaderBeta variant="default" className="tk-ml-h" value={100} />
        <LoaderBeta variant="primary" className="tk-ml-2h" value={100} />
        <LoaderBeta variant="attention" className="tk-ml-2h" value={100} />
        <LoaderBeta variant="warning" className="tk-ml-2h" value={100} />
        <LoaderBeta variant="ok" className="tk-ml-2h" value={100} />
      </div>

      <h2 className="tk-mt-4h">Sizes</h2>
      <div style={{ display: 'flex' }}>
        <LoaderBeta
          variant="primary"
          className="tk-ml-h"
          size="small"
          value={100}
        />
        <LoaderBeta
          variant="primary"
          className="tk-ml-2h"
          size="medium"
          value={100}
        />
        <LoaderBeta
          variant="primary"
          className="tk-ml-2h"
          size="large"
          value={100}
        />
      </div>
      <div>
        <h2 className="tk-mt-4h">Determinate</h2>
        <LoaderBeta
          variant="primary"
          direction="vertical"
          className="tk-ml-h"
          progress="determinate"
          value={50}
        />
        <div>
          <h4 className="tk-mt-4h">With text and direction</h4>
          <div className="tk-loader-container">
            <LoaderBeta
              variant="primary"
              loadingText={'75%'}
              direction="vertical"
              className="tk-ml-h"
              progress="determinate"
              value={75}
            />
            <div>
              <LoaderBeta
                variant="primary"
                loadingText={'75%'}
                direction="horizontal"
                className="tk-ml-h"
                progress="determinate"
                value={75}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="tk-mt-4h">Indeterminate</h2>
        <LoaderBeta
          variant="primary"
          direction="vertical"
          className="tk-ml-h"
          progress="indeterminate"
          value={0}
        />
        <div>
          <h4 className="tk-mt-4h">With text and direction</h4>
          <div className="tk-loader-container">
            <LoaderBeta
              variant="primary"
              loadingText={loadingText}
              direction="vertical"
              className="tk-ml-h"
              progress="indeterminate"
              value={0}
            />
            <div>
              <LoaderBeta
                variant="primary"
                loadingText={loadingText}
                direction="horizontal"
                className="tk-ml-h"
                progress="indeterminate"
                value={0}
              />
            </div>
          </div>
        </div>
      </div>
      <h2 className="tk-mt-4h">Dynamic determinate</h2>
      <div>
        <LoaderBeta
          className="tk-ml-h"
          variant="primary"
          progress="determinate"
          type="spinner"
          value={value}
          loadingText={value + '%'}
        />
        <br />
        <Button onClick={start}>Click</Button>
      </div>
    </>
  );
};

export const Linear: React.FC = () => {
  const [value, setValue] = React.useState(0);
  let value1 = 0;

  let intervalId = null;

  function count() {
    if (value1 <= 99) {
      value1++;
      setValue(value1);
    } else {
      clearInterval(intervalId);
    }
  }
  function start() {
    intervalId = setInterval(count, 100);
  }

  return (
    <>
      <div>
        <h2 className="tk-mt-4h">Determinate</h2>
        <LoaderBeta
          className="tk-ml-h"
          value={50}
          progress="determinate"
          type="linear"
        />
      </div>
      <h4 className="tk-mt-4h">With text</h4>
      <div>
        <LoaderBeta
          className="tk-ml-h"
          progress="determinate"
          loadingText="50%"
          type="linear"
        />
      </div>
      <div>
        <h2 className="tk-mt-4h">Indeterminate</h2>
        <LoaderBeta
          className="tk-ml-h"
          progress="indeterminate"
          type="linear"
        />
      </div>
      <h4 className="tk-mt-4h">With text</h4>
      <div>
        <LoaderBeta
          className="tk-ml-h"
          progress="indeterminate"
          loadingText="Loading..."
          type="linear"
        />
      </div>
      <h2 className="tk-mt-4h">Dynamic determinate</h2>
      <div>
        <LoaderBeta
          className="tk-ml-h"
          progress="determinate"
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
