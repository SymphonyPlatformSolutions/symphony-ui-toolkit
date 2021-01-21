# Contributing to UIToolkit Styles

The following is a set of guidelines for contributing to UIToolkit Styles library. These are mostly guidelines, not rules, so feel free to suggest improvements of the following

## Introduction

UIToolkit styles library is intended to implement the visual part of Symphony's official design system, by providing a set of CSS classes.

## Defining a new component

DevX team is the official owner of UIToolkit and the creation of any new component implies the following steps:

- Discussing the creation of the new component by providing example use cases and contexts in UIToolkit Contributors room
- Providing a clear design and description to devX team through a confluence document and a figma provided by UX team
- The confluence page should document the CSS convention for using the component

## Structure and Styleguide

In order to keep consistency between components the following aspects are to be taken into account while creating the new component:

- Components are all prefixed by tk- followed by component name, example:  
  _tk-button_
- Variants of the component should use -- notation, example:  
  _tk-button--primary_
- Atomic components (buttons, inputs) should go under atoms directory while composed ones (input group) should go under molecules
- All components should implement light AND dark theme for this use static colors palette (variables/colors/statics) and theme accessors to be used in your component (variables/themes/accessors)

## Pull requests

In order to have a clear pull request the following items are welcome:

- Short description of the component
- Snapshot/video of the component
- Link a Jira ticket and the component specification doc if possible
