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

**Requirements**  

 - Selenium Grid
 - [Chromedriver](https://chromedriver.chromium.org/downloads)  

**Setting Up**  

 1. Download Selenium Server.

```bash
curl -L -O https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.1.0/selenium-server-4.1.1.jar
```

2. Configure Selenium Grid.

```bash
java -jar selenium-server-4.1.1.jar hub
```
3. In other terminal run Selenium Node.

```bash
java -jar selenium-server-4.1.1.jar node
````

4. Now Start storybook and then start Visual Testing Execution.
```bash
yarn start
yarn test
```
**Update the test images**  

When the visual testing detects new components or changes on the existing one’s it will fail the tests. In order to fix it you will need to:

 1. Download report.zip from the CircleCI build.
 2. Replace on .creevey/report.
 3. Execute the command below, to approve the new images.
	```bash
	yarn test --update
	```
4. Push into your PR.

**NOTE:** The images could be different from local env against CircleCI. In our pipelines, are able to find the report with all images during the execution into report.zip.
## 🧩 Theming components

Read detailed guide on [theming-guide.md](https://github.com/SymphonyPlatformSolutions/symphony-bdk-ui-toolkit-styles/blob/master/docs/theming-guide.md)

## 💪 Contributing

Read detailed guide on [contribution process](https://github.com/SymphonyPlatformSolutions/symphony-bdk-ui-toolkit-styles/blob/master/docs/contributing.md)
