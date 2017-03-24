# babel-webpack-package-boilerplate

A boilerplate geared towards building React-focused NPM packages. Supports 
webpack packaging, babel-preset-env transpilation, eslint-based linting, and 
the AVA test runner, pre-configured with JSDOM, Sinon, and Enzyme. 
Intentionally simple and straightforward.

Run:
```bash
npm run test
```
to see the AVA testing infrastructure test a simple React component using
JSDOM, Sinon, and Enzyme.

See the `package.json` for all the `npm run` commands.

## Configuration

### Babel
The Babel config is located in the `package.json` and uses the following presets
and plugins:
  * ENV
  * Stage-0
  * React
  * Decorators-legacy


### ESLint
The ESLint config is also in `package.json` and uses the following configs:
  * Standard
  * Standard-react
  
### Unit Testing
The unit testing config includes the following:
  * AVA test runner, with an optional watch mode.
  * One Babel config for both source and tests.
  * Enzyme rendering, with JSDOM ready to go.
  * Sinon

