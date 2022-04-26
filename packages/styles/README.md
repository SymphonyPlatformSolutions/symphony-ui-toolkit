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

In order to install and start using the library you can read the detailed guide on [getting-started.md](docs/getting-started.md)

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

When the visual testing detects new components or changes on the existing ones it will fail the tests. In order to fix it you will need to run the `update-test-images.sh` script.
It accepts as a parameter the URL of the CircleCI's `report.zip` file. 

Example:

`$ ./update-test-images.sh https://output.circle-artifacts.com/output/job/54d8d83d-315b-46e3-bcc2-34f1a75d1f9f/artifacts/0/.creevey/report/report.zip` 

It will execute the following steps automatically:

 1. Download `report.zip` from the artefacts provided on the CircleCI build URL
 3. Unzip it
 2. Replace on .creevey/report
 3. Execute the following commands to update the PNGs:
 ```
    yarn test --update
    yarn test --config .creevey/config_condensed.js --update
    yarn test --config .creevey/config_darkmode.js --update
    yarn test --config .creevey/config_darkmode_condensed.js --update
 ```
 4. `git add` the updated PNG images to the repository.

All that's left to you is to `git commit` and `git push`.

**NOTE:** The images could be different from local env against CircleCI. In our pipelines, are able to find the report with all images during the execution into report.zip.
## 🧩 Theming components

Read detailed guide on [theming-guide.md](docs/theming-guide.md)

## 💪 Contributing

Read detailed guide on [contribution process](docs/contributing.md)
