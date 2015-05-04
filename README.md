# get-gulp-args [![NPM version](https://badge.fury.io/js/get-gulp-args.svg)](http://badge.fury.io/js/get-gulp-args)

> get cmd arguments for gulp commands

## Install with [npm](npmjs.org)

```sh
npm install get-gulp-args
```

## Usage

```sh
gulp build --dev --main
```

```js
var args = require('get-gulp-args')();

process.env.NODE_ENV = args[0] || 'dev';
process.env.PROJECT  = args[1] || 'main';
```

or

```sh
gulp build --env dev --project main
```

```js
var args = require('get-gulp-args')();

process.env.NODE_ENV = args.env     || 'dev';
process.env.PROJECT  = args.project || 'main';
```


## License

Copyright (c) 2014-2015 Oleg Istomin
Released under the MIT license

***