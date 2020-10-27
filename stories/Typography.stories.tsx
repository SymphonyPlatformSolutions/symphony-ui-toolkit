import React from 'react';
import Typography from '../src/components/typography';


export const TypographyUtils: React.SFC = () => (
  <div>
    <h1 className="tk-mb-4h">Typography</h1>
    <div className="flex-row tk-mb-3h">
      <Typography className="w-5" type="h1">H1</Typography>
      <Typography type="h1">Big Titles</Typography>
    </div>
    <div className="flex-row tk-mb-3h">
      <Typography className="w-5" type="h2">H2</Typography>
      <Typography type="h2">Small titles</Typography>
    </div>
    <div className="flex-row tk-mb-3h">
      <Typography className="w-5" type="h3">H3</Typography>
      <Typography type="h3">SMALL BOLD TITLES</Typography>
    </div>
    <div className="flex-row tk-mb-3h">
      <Typography className="w-5" type="h4">H4</Typography>
      <Typography type="h4">EXTRA SMALL TITLES</Typography>
    </div>
    <div className="flex-row tk-mb-3">
      <Typography className="w-5">Body </Typography>
      <Typography>Research and development refer to activities in conection with corportate or government innovation</Typography>
    </div>
    <div className="flex-row  tk-mb-3">
      <Typography className="w-5" type="small">Small</Typography>
      <Typography type="small">Research and development refer to activities in conection with corportate or government innovation</Typography>
    </div>
    <div className="flex-row tk-mb-3">
      <Typography className="w-5" variant="bold">Bold</Typography>
      <Typography variant="bold">Research and development refer to activities in conection with corportate or government innovation</Typography>
    </div>
    <div className="flex-row tk-mb-3">
      <Typography className="w-5" variant="italic">Italic</Typography>
      <Typography variant="italic">Research and development refer to activities in conection with corportate or government innovation</Typography>
    </div>
  </div>
);

export default {
  title: 'Typrography',
  component: Typography,
};
