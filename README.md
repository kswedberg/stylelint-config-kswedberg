# Stylelint Config

## Install

Run the following from the project's root:

`npm install stylelint-config-kswedberg --save-dev`

or:

`yarn add stylelint-config-kswedberg --dev`

## Usage

Add the config of your choice to the  `extends` array in the `stylelint.config.mjs` file.

**CSS or Postcss**:

```js
export default {
  extends: ['stylelint-config-kswedberg'],
};
```

**SCSS**:

```js
export default {
  extends: ['stylelint-config-kswedberg/scss'],
};
```

**Vue**:

```js
export default {
  extends: ['stylelint-config-kswedberg/vue'],
};
```

**SCSS and Vue**:

```js
export default {
  extends: ['stylelint-config-kswedberg/scss-vue'],
};
```
