# 💪 Contributing to UIToolkit Styles

The following is a set of guidelines for contributing to UIToolkit Styles library. These are mostly guidelines, not rules, so feel free to suggest improvements of the following

## Introduction

UIToolkit styles library is intended to implement the visual part of Symphony's official design system, by providing a set of CSS classes.

## Defining a new component

Solution Frameworks team is the official owner of UIToolkit and the creation of any new component implies the following steps:

- Discussing the creation of the new component by providing example use cases and contexts in UIToolkit Contributors room
- Providing a clear design and description to SolFwk team through a confluence document and a UIToolkit Handoff figma provided by UX team
- The confluence page should document the CSS convention for using the component, the goal is to align on the simplest API to use.

## Structure and Styleguide

In order to keep consistency between components the following aspects are to be taken into account while creating the new component:

- Components are all prefixed by tk- followed by component name, example:  
  _tk-button_
- As all components follow BEM convention the following rules apply:
  - Variants of the component should use -- notation, example:  
    _tk-button--primary_
  - Subcomponents of a main component should append their name after two underscores, example: _tk-dialog\_\_body_
- Atomic components (buttons, inputs) should go under atoms directory while composed ones (input group) should go under molecules
- All components should implement light AND dark theme for this use static colors palette (variables/colors/statics) and theme accessors to be used in your component (variables/themes/accessors)

## 😀 Icons

To add **new icons** on UIToolkit:

1. Add the <em>\*.svg</em> source file to:
```
src/
|
|– icons/
|   |– svg/
```
2. Run:
```
yarn start
```

3. Verify the following files have been updated including the **new icons**:
```
tk-icons.ts
tk-icons.codepoints.json
```

- The name of the icon should be in kebab-case.

- If your SVG contains an __evenodd__ filling rule it can't be added to the project as it won't render properly under windows. SVGs added should not contain this rule.

- **Aliases:** To use several names for the same icon. You can define aliases in the file ['src/icons/tk-icons.aliases.json'](./src/icons/tk-icons.aliases.json).

>```
>"another-name":"activity"
>```
>"tk-icon-another-name" and "tk-icon-activity" will render the same icon.

## Documentation

Documenting every component is very important for UItoolkit and it's done using storybook. Every separate story should represent a use case of the component

## Pull requests

In order to have a clear pull request the following items are welcome:

- Short description of the component
- Snapshot/video of the component
- Link a Jira ticket and the component specification doc if possible
