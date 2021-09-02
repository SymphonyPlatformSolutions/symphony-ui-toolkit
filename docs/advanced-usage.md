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