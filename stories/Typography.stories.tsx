import * as React from 'react';
import Typography from '../src/components/typography';


const Template = (args) => {
  return <Typography {...args}>Title h1 italic and bold</Typography>;
};

export const Titles = Template.bind({});
Titles.args = {
  type: 'h1',
  variant: ['italic', 'bold'],
};

const text = 'Research and development refer to activities in connection with corporate or government innovation';

export const TypographyUtils: React.FC = () => (
  <div>
    <h1>Typography</h1>
    <Typography className="tk-mb-2h tk-text-ellipsis" type="h1">H1. {text}</Typography>
    <Typography className="tk-mb-2h tk-text-ellipsis" type="h2">H2. {text}</Typography>
    <Typography className="tk-mb-2h tk-text-ellipsis" type="h3">H3. {text}</Typography>
    <Typography className="tk-mb-2h tk-text-ellipsis" type="h4">H4. {text}</Typography>
    <Typography className="tk-mb-2h tk-text-ellipsis">Body. {text}</Typography>
    <Typography className="tk-mb-2h tk-text-ellipsis" type="small">Small. {text}</Typography>
    <Typography className="tk-mb-2h tk-text-ellipsis" variant="bold">Bold. {text}</Typography>
    <Typography className="tk-mb-2h tk-text-ellipsis" variant="italic">Italic. {text}</Typography>
  </div>
);

export default {
  title: 'Utils/Typrography',
  component: Typography,
};
