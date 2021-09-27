# 🧮 Advanced Usage

## 🚏 Using UIToolkit outside the main document
Some UIToolkit components use styling libraries like `@emotion` and `styled-components` that inject styling into the `<head>` of the main document. If you use these components in a document outside the main one, the styling will only be applied to the main document. You need to use the `<StylesInjection>` component in your root and add an injection point. For example:

```
import { StylesInjection } from '@symphony-ui/uitoolkit-components';

return (
    <StylesInjection id="unique_id" injectionPoint={ externalDocument.head }>
        <Dropdown/>
        <Tooltip/>
    </StylesInjection>
);
```

## 🔗 Linking UIToolkit
If you are linking UIToolkit in another repository there is a risk there will be two instances of `react` and `react-dom` running which can cause [Invalid Hook Call](https://reactjs.org/warnings/invalid-hook-.call-warning.html).

Try linking YOUR_PROJECT's `react` and `react-dom` modules to UIToolkit.

```
cd YOUR_PROJECT
cd node_modules/react
yarn link
cd ../react-dom
yarn link

cd symphony-bdk-ui-toolkit-components
yarn link
yarn install
yarn link react
yarn link react-dom

cd YOUR_PROJECT
yarn link "@symphony-ui/uitoolkit-components"
```