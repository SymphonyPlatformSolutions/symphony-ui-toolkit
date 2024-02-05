# 🧮 Advanced Usage

## 🔗 Linking UIToolkit
If you are linking UIToolkit in another repository there is a risk there will be two instances of `react` and `react-dom` running which can cause [Invalid Hook Call](https://reactjs.org/warnings/invalid-hook-.call-warning.html).

Try linking YOUR_PROJECT's `react` and `react-dom` modules to UIToolkit.

```
cd YOUR_PROJECT
cd node_modules/react
yarn link
cd ../react-dom
yarn link

cd symphony-ui-toolkit/packages/components
yarn link
yarn install
yarn link react
yarn link react-dom

cd YOUR_PROJECT
yarn link "@symphony-ui/uitoolkit-components"
```
