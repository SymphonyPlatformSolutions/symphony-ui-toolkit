import React from 'react';
import Typography from '../src/components/typography';


export const TypographyUtils: React.SFC = () => (
  <div className="tk-ml-2h  tk-text-color">
    <h1 className="tk-mb-4h">Typography</h1>
    <Typography className="tk-mb-4h" tag="h1">H1 <span className="tk-ml-5h">Big titles</span></Typography>
    <Typography className="tk-mb-4h" tag="h2">H2 <span className="tk-ml-5h">Small titles</span></Typography>
    <Typography className="tk-mb-4h" tag="h3">H3  <span className="tk-ml-5h">SMALL BOLD TITLES</span></Typography>
    <Typography className="tk-mb-4h" tag="h4">H4  <span className="tk-ml-5h">EXTRA SMALL TITLES</span></Typography>
    <Typography className="tk-mb-4h">Body  <span className="tk-ml-3h">Research and development refer to activities in conection with corportate or government innovation</span></Typography>
    <Typography className="tk-mb-4h" tag="small">Small  <span className="tk-ml-3h">Research and development refer to activities in conection with corportate or government innovation</span></Typography>
    <Typography className="tk-mb-4h" variant="bold">Bold  <span className="tk-ml-3h">Research and development refer to activities in conection with corportate or government innovation</span></Typography>
    <Typography className="tk-mb-4h" variant="italic">Italic  <span className="tk-ml-3h">Research and development refer to activities in conection with corportate or government innovation</span></Typography>
  </div>
);

export default {
  title: 'Typrography',
  component: TypographyUtils,
};