import * as React from 'react';
import Progressbar from '../src/components/progressbar';

const Template = (args) => <Progressbar {...args} />;

export const Default = Template.bind({});

export const ProgressBar: React.FC = () => (
  <>
    <h2 className="tk-mt-4h">Determinate (linear)</h2>
    <div>
      <Progressbar className="tk-ml-h" value={'100'} progress={'determinate'} />
    </div>

    <div>
      <h2 className="tk-mt-4h">Indeterminate (linear)</h2>
      <Progressbar className="tk-ml-h" progress={'indeterminate'} />
    </div>
  </>
);

export default {
  title: 'Components/Progressbar',
  component: Progressbar,
};
