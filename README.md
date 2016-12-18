# Igo Web Framework Test

## Presentation
Simple app to test Igo Web Framework for NodeJs

## Getting started
Before using Igo, you need to install NodeJS (>=5.9.1) and a few modules:
```sh
$ npm install -g bower gulp-cli mocha
```
To get started clone, install the required package and run the migration file `migration.js` for creating the test database `igo_test`:
```sh
$ git clone git@github.com:aybezz/igo_test.git igo_test && cd igo_test
$ npm install && bower install
$ node migration.js
$ gulp
```

Go to [localhost:3000](http://localhost:3000) and have fun.
