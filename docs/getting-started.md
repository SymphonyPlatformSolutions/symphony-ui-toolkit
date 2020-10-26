# Getting Started
To install UIToolkit-Styles on your project you can either install it with npm or from CDN.


## Install:

Install the library from npm by running the following command on your project:

```bash
$ npm install @symphony/uitoolkit-styles --save
```

Or using yarn

```bash
$ yarn add @symphony/uitoolkit-styles
```

Import the main css file on your project:

```bash
 import '@symphony/uitoolkit-styles/dist/css/uitoolkit.css';
```
Using webpack will serve automatically font files

You can also import the SASS version:

```bash
  @import '~@symphony/uitoolkit-styles/uitoolkit.scss'
```

In some cases (depending on your bundling solution) you might need to indicate the icon fonts path changing  the `$ICONS_FONTS_PATH` variable, with **myPath** pointing to the fonts directory under **node_modules/@symphony/uitoolkit-styles/dist/fonts**

```bash
 $ICONS_FONTS_PATH: 'myPath/fonts';
```

## Install from **CDN**:

Alternatively, you can use the [symphony](https://cdn.symphony.com/resources/ui-toolkit/master/css/uitoolkit.css) CDN to load the compiled CSS version. 

Import the prefered css on your project:
```bash
<link rel="stylesheet" href="https://cdn.symphony.com/resources/ui-toolkit/v1.0.10/css/uitoolkit.css">
```

**Note**

 For development purposes, if you want to test the latest features you can use the master version from the CDN:

```bash
<link rel="stylesheet" href="https://cdn.symphony.com/resources/ui-toolkit/master/css/uitoolkit.css">
```
