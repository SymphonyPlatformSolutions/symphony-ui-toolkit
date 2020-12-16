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


See a [Life Demo](https://codesandbox.io/s/distracted-silence-clek8?) on CodeSandbox of a customized theme using the CDN version of the styles library. 

## What can be themeable on UIToolkit?

Here is the list of CSS variables defined to be customized:

```css
/** ======== Globals ======== */
--tk-color-primary:default;
--tk-color-success:default;
--tk-color-warning:default;
--tk-color-error:default;
--tk-main-text-color: default;
--tk-outline-color: default;


/** ======== Inputs and text areas ======== */
--tk-input-default-inactive-color:default; 
--tk-input-default-active-color:default;
--tk-input-default-hover-color:default;
--tk-input-default-focus-border-color:default;
--tk-input-default-background-color:default;
--tk-input-error-inactive-color:default;
--tk-input-error-active-color: default;
--tk-input-error-focus-border-color: default;
--tk-input-error-background-color:default;
--tk-input-disabled-color: default;
--tk-input-disabled-background-color:default;

/** ======== Buttons ======== */

/** Primary **/
--tk-button-color-primary-default: default;
--tk-button-color-primary-hover: default;
--tk-button-color-primary-active: default;
--tk-button-color-primary-disabled:default;
--tk-button-color-primary-text:default;
--tk-button-color-primary-text-disabled: default;


/** Secondary **/
--tk-button-color-secondary-default: default;
--tk-button-color-secondary-hover: default;
--tk-button-color-secondary-active: default;
--tk-button-color-secondary-disabled:default;
--tk-button-color-secondary-text:default;
--tk-button-color-secondary-text-disabled: default;


/** Tertiary **/
--tk-button-color-tertiary-default: default;
--tk-button-color-tertiary-hover: default;
--tk-button-color-tertiary-active: default;
--tk-button-color-tertiary-disabled:default;
--tk-button-color-tertiary-text:default;
--tk-button-color-tertiary-text-disabled: default;

  
/** Destructive **/
--tk-button-color-destructive-default: default;
--tk-button-color-destructive-hover: default;
--tk-button-color-destructive-active: default;
--tk-button-color-destructive-disabled:default;
--tk-button-color-destructive-text:default;
--tk-button-color-destructive-text-disabled: default;


/** ======== DatePickers ======== */
--tk-datepicker-default-color:default;
--tk-datepicker-selected-color:default;
--tk-datepicker-selected-background-color:default;


/** ======== Tables ======== */
--tk-table-hover-color:default;


/** ======== Dialog ======== */
--tk-dialog-background-color:default;
--tk-dialog-box-shadow-color:default;
--tk-dialog-cross-color:default;
--tk-dialog-hover-cross-color:default;
--tk-dialog-backdrop-color:default;


/** ======== List ======== */
--tk-list-background-color:default;
--tk-list-selected-color:default;
--tk-list-divider-color:default;


/** ======== Avatar ======== */
--tk-avatar-border-color:default;
```
