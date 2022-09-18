Test Automation Example
=============================
This is a test automation example using [Cucumber](https://cucumber.io/). Here, we'll
be testing the [Book API REST service](../service) example that is included with this project.

### Install Modules
To install all the dependencies of the project, cd into the home directory and execute the following command,
```
yarn install
```
### Test
To run all the automation tests, execute the following command from a terminal,
```
yarn test
```
The test report will be generated in the `test-reports` folder.

To just run the `health` feature,
```
yarn health
```

or the `book-api` feature,
```
yarn book-api
```

### Lint
To run lint on the whole project, execute the following command from a terminal,
```
yarn lint
```

### Formatting
To format a specify file using the standard for this project, execute the following command from a terminal,
```
yarn eslint --fix <path to file>

e.g.,
yarn eslint --fix src/util/rest-helper.js
```
