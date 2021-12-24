# 💄 SymphonyBDK - UI Toolkit Styles

The official styles library of Symphony's design system

## Requirements

- Node 12+
- Yarn 1.22+

## Browser support

- Chrome: Latest
- Edge: Latest

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

## 🤖 Visual Testing

Automated visual testing uses software to automate the process of comparing visual elements across various screen combinations to uncover visual defects.

[Creevey](https://github.com/wKich/creevey/) is a Cross-browser screenshot testing tool for Storybook with a fancy UI Runner.

- Selenium Grid it is an dependency of Creevey, to configure follow the steps below:

Download Selenium Server
```bash
curl -L -O https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.1.0/selenium-server-4.1.1.jar
```

Configure Selenium Grid
```bash
java -jar selenium-server-4.1.1.jar hub
```

In other terminal run Selenium Node
```bash
java -jar selenium-server-4.1.1.jar node
````

- Now Start storybook and then start Visual Testing Execution.

```bash
yarn start
yarn test
```
**NOTE:** After changes or new Components, the tests will fail or need to be included in validation.
In order to update them, you may approve them all in one command:

```bash
yarn test --update
```
**NOTE:** The images could be different from local env against CircleCI. In our pipelines, are able to find the report
with all images during the execution into report.zip. 

## 🧩 Theming components

Read detailed guide on [theming-guide.md](https://github.com/SymphonyPlatformSolutions/symphony-bdk-ui-toolkit-styles/blob/master/docs/theming-guide.md)

## 💪 Contributing

Read detailed guide on [contribution process](https://github.com/SymphonyPlatformSolutions/symphony-bdk-ui-toolkit-styles/blob/master/docs/contributing.md)
