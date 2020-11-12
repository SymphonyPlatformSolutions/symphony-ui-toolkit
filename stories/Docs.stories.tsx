import * as React from 'react';
import GettingStartedDoc from '../docs/getting-started.md';

import ReactHtmlParser from 'html-react-parser';

export default {
  title: 'Docs',
};

export const GettingStarted: React.SFC = () => {
  return (<div>{ReactHtmlParser(GettingStartedDoc)}</div>)
};
