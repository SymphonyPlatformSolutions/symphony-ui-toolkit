# Contributing to UIToolkit Components

The following is a set of guidelines for contributing to UIToolkit Components library. These are mostly guidelines, not rules, so feel free to suggest improvements of the following

## Introduction

&nbsp;&nbsp;UIToolkit components library is intended to implement UI components of Symphony's official design system based on React.
It adds a layer of logic above the visual part already implemented in UIToolkit Styles library.

## Styles or Components? or both?

&nbsp;&nbsp;UIToolkit Styles library provides a first implementation of each component as much as CSS could handle. This way every component could have a simple implementation using plain CSS, and an advanced one using React.  
&nbsp;&nbsp;So the answer is simply both, this way non react users could make benefit from Symphony's Design System.  
&nbsp;&nbsp;In Some cases though, some styles are only useful to react components, that's why UIToolkit styles has a dedicated UItoolkit Components directory if your styles imply theming.

> NOTE: if your React Component-only styles imply just positioning no need to pollute UIToolkit Styles and use JSS instead

## Defining a new component

DevX team is the official owner of UIToolkit and the creation of any new component implies the following steps:

- Discussing the creation of the new component by providing example use cases and contexts in UIToolkit Contributors room
- Providing a clear design and description to devX team through a confluence document and a figma provided by UX team
- The confluence page should document the CSS convention for using the component

## Structure and Styleguide

In order to keep consistency between components the following aspects are to be taken into account while creating the new component:

- Following React recommendation we'll privilege the usage of Function components instead of class based
- Every component should be tested at least to 80%
- Even if Enzyme exists we'll use from now on only Testing Library
- Using any is not forbidden ... but avoid it as much as you can
- While defining you component's props, extend existing React.HTMLProps and only specify those you specifically need for your component

## Exporting your component: from component to lib root

There is a consist way to export component and it's interfaces, so while creating your component

- Make sure you add an index at the root of your component folder
- Your index should export by Default the component
- The index should also export the component and interfaces - no better example than the plain ol' Button
- Finally export the component from the components/index.ts  
  ex: `export * from './button'`

## Pull requests

In order to have a clear pull request the following items are strongly recommended:

- Short description of the component
- Snapshot/video of the component
- Link a Jira ticket and the component specification doc if possible
