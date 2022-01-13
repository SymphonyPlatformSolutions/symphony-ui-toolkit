# Theming guide

UIToolkit styles have defined a set of CSS variables to theme its components. </br></br>

You can use the *default*, *dark* and *condensed* themes provided by UIToolkit or define your own theme: 

- To use the the **dark** theme, add the `.tk-dark` class to the `<body>` of your project. 
- To use the the **condensed** theme, add the `.tk-condensed` class to the `<body>` of your project. 
- To **define your theme** you will need to override the CSS variables.


## How to define your theme using CSS variables:

1. Import the UIToolkit styles library on your project. See [getting-started.md](https://github.com/SymphonyOSF/symphony-bdk-ui-toolkit-styles/blob/master/docs/getting-started.md)

2. Define a theme class `.your-theme` on your css files to override the default values:

```css
  .your-theme {
    /** ======== Your customized theme variables ======== */
  }
```
3. Add `.your-theme` class to the `<body>` of your project. It will overriwrite the default provided by UIToolkit. 


See a [Live Demo](https://codesandbox.io/s/distracted-silence-clek8?) on CodeSandbox of a customized theme using the CDN version of the styles library. 



