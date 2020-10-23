# Getting Started

## Requirements

- Node 10+
- Yarn


## Install

Install the library from npm by running the following command on your project:

```bash
$ npm install @symphony/uitoolkit-components --save
```
or using yarn

```bash
$ yarn add @symphony/uitoolkit-components
```

## Setup 

To start using UI Toolkit Components you will need to import the styles definition on your project:

```bash
  @symphony/uitoolkit-components/styles
```

## Usage

Start using by importing the component you need 

```bash
import { Button } from '@symphony/uitoolkit-components';

const App = () => (
  <Button onClick={()=>alert('UIToolkit is awesome!')}>
    Click me!
  </Button>
);
```

