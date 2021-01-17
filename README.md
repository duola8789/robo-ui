# RoboUI And ElementUI Theme

```shell
yarn install robo-ui
```

## Use ElementUI Theme

Use Sass import

```css
@import 'robo-ui';
```

Or Use webpack

```javascript
import 'element-theme-robo'
```

Or

```html
<link rel="stylesheet" href="path/to/node_modules/element-theme-robo/lib/index.css">
```

##  Import  ElementUI Theme on demand

```javascript
import 'robo-ui/lib/theme-robo/input.css';
import 'robo-ui/lib/theme-robo/select.css';

// ...
```

Or with [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)

```js
// babel.config.js
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "~node_modules/robo-ui/lib/theme-robo"
      }
    ]
  ]
};
```

## Use Robo UI Component

Just like use Element UI
