# fission-router [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Support us][gittip-image]][gittip-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]


## Information

<table>
<tr>
<td>Package</td>
<td>fission-router</td>
</tr>
<tr>
<td>Description</td>
<td>A declarative layer on top of react-router with some other nice-to-haves</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Usage

## Install

```
npm install fission-router --save
```
## Example

```js
var Router = require('fission-router');

var appRouter = Router({
  splash: {
    path: '/',
    handler: SomeReactComponent
  },
  login: {
    path: 'login',
    handler: SomeReactComponent
  },
  home: {
    path: 'home',
    handler: SomeReactComponent,
    children: {
      dashboard: {
        default: true,
        handler: SomeReactComponent
      },
      stats: {
        path: 'statistics',
        handler: SomeReactComponent
      },
      job: {
        path: 'job/:jobId',
        handler: SomeReactComponent
      }
    }
  }
});

appRouter.start(document.body);
```

## LICENSE

(MIT License)

Copyright (c) 2015 Fractal <contact@wearefractal.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[gittip-url]: https://www.gittip.com/wearefractal/
[gittip-image]: http://img.shields.io/gittip/wearefractal.svg

[downloads-image]: http://img.shields.io/npm/dm/fission-router.svg
[npm-url]: https://npmjs.org/package/fission-router
[npm-image]: http://img.shields.io/npm/v/fission-router.svg

[travis-url]: https://travis-ci.org/fissionjs/fission-router
[travis-image]: https://travis-ci.org/fissionjs/fission-router.png?branch=master

[coveralls-url]: https://coveralls.io/r/fissionjs/fission-router
[coveralls-image]: https://coveralls.io/repos/fissionjs/fission-router/badge.png

[depstat-url]: https://david-dm.org/fissionjs/fission-router
[depstat-image]: https://david-dm.org/fissionjs/fission-router.png

[david-url]: https://david-dm.org/fissionjs/fission-router
[david-image]: https://david-dm.org/fissionjs/fission-router.png?theme=shields.io
