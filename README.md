# onyx
A javascript unit testing library.

### File Structure:

```
onyx/
  ├── onyx/
  |    ├── src/
  |    |    └── matchers/
  |    |    |    ├── deeplyEqual.js
  |    |    |    ├── falsy.js
  |    |    |    ├── identical.js
  |    |    |    ├── index.js
  |    |    |    ├── toSame.js
  |    |    |    ├── toThrow.js
  |    |    |    └── truthy.js
  |    └── package.json
  ├── playground/
  |    ├── *node_modules
  |    ├── src/
  |    ├── tests/
  |    └── package.json
  └── README.md

  ```
Filenames denoted with an asterisk `*` are auto generated and should not be modified.

## file explanation

- `onyx/` : Onyx library directory.
  - `src/` : Onyx src directory.
    - `matchers/` : Onyx matchers directory.
      - `deeplyEqual.js` : Deeply equal matcher.
      - `falsy.js` : Falsy matcher.
      - `indentical.js` : Indentical matcher.
      - `index.js` : Matchers access point.
      - `toSame.js` : To same matcher.
      - `toThrow.js` : To throw matcher.
      - `truthy.js` : Truthy matcher.
  - `package.json` : Onyx package.json.
- `playground/` : Test playground for Onyx.
  - `src/` : Onyx playground src directory.
  - `tests/` : Onyx playground tests.
  - `package.json` : Onyx playground package.json.
- `README.md` : Onyx readme.
