# 💄 SymphonyBDK - UI Toolkit Styles

The official styles library of Symphony's design system

## Requirements

- Node 12+
- Yarn

## 🛠 Install

Run

```
yarn
```

## 🛸 Explore

```
yarn start
```

## ✅ Getting started

In order to install and start using the library you can read the detailed guide on [getting-started.md](https://github.com/SymphonyPlatformSolutions/symphony-bdk-ui-toolkit-styles/blob/master/docs/getting-started.md)

## 😀 Icons

To add a new icon in UIToolkit Styles:

- Add the <em>\*.svg</em> source file to:

```
src/
|
|– icons/
|   |– svg/
```

**Aliases:** To use several names for the same icon. You can define aliases in the file ['src/icons/tk-icons.aliases.json'](./src/icons/tk-icons.aliases.json).

```
"another-name":"activity"
```
"tk-icon-another-name" and "tk-icon-activity" will render the same icon.

## 🤖 Visual Testing

Automated visual testing uses software to automate the process of comparing visual elements across various screen combinations to uncover visual defects.

[Creevey](https://github.com/wKich/creevey/) is a Cross-browser screenshot testing tool for Storybook with a fancy UI Runner.

- Start storybook and then start Visual Testing Execution.

```bash
yarn start
yarn test
```
And that's it.

**NOTE:** After changes or new Components, the tests will fail or need to be included in validation.
In order to update them, you may approve them all in one command:
```bash
yarn test --update
```

## 🧩 Theming components

Read detailed guide on [theming-guide.md](https://github.com/SymphonyPlatformSolutions/symphony-bdk-ui-toolkit-styles/blob/master/docs/theming-guide.md)

## 💪 Contributing

Read detailed guide on [contribution process](https://github.com/SymphonyPlatformSolutions/symphony-bdk-ui-toolkit-styles/blob/master/docs/contributing.md)
