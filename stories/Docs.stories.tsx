
import React from "react";
import gettingStarted from '../docs/getting-started.md';

const parse = require('html-react-parser');

export default {
  title: 'Docs',
};

export const GettingStarted: React.SFC = () => {
  return (<div className="tk-ml-2h">{parse(gettingStarted)}</div>)
};
