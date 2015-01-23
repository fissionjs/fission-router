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
  // Route = /
  splash: {
    path: '/',
    view: SomeReactComponent
  },
  // Route = /login
  login: {
    path: 'login',
    view: SomeReactComponent
  },
  // Route = /home
  home: {
    path: 'home',
    view: SomeReactComponent,
    children: {
      // Route = /home, this is a subview of home
      dashboard: {
        default: true,
        view: SomeReactComponent
      },
      // Route = /home/statistics, this is a subview of home
      stats: {
        path: 'statistics',
        view: SomeReactComponent
      },
      // Route = /home/job/123, this is a subview of home
      job: {
        path: 'job/:jobId',
        view: SomeReactComponent
      }
    }
  }
});

appRouter.start(document.body);
```

## Differences

react-router is great but I don't like JSX and wanted a simpler API. This module provides a small wrapper that gives you the ability to provide an object with your route info instead of using JSX, renames a few things, and moves some stuff around.

## Documentation

You should read the react-router documentation to get a full understanding of how this all works. This documentation is a very basic API overview of stuff that was changed.

### Router(config[, options])

This returns a react router object, but with no `.run`. You can expect the same methods (transitionTo, replaceWith, etc.) that exist in react-router to exist on this object too.

#### Config format

The key of this object should be a unique name to describe the route.

- path
  - Optional string describing the path needed to activate the route
  - Path is relative to the parent path
- view
  - Required component function that you want rendered when the route is activated
- default
  - If this is the default view or not. Useful when you have a set of children, where one is activated by default. If unspecified this value will be false.
- children
  - optional object of child routes

If a route has no options that need to be specified then you can also just give the function like so:

```js
children: {
  home: HomeView
}
```

which is just sugar for

```js
children: {
  home: {
    view: HomeView
  }
}
```

##### Possible options

- location
  - A [Router Location Implementation](#router-locations)
  - Defaults to `Router.locations.History`
  - Can also be a string for testing
- Anything else [react-router.create](https://github.com/rackt/react-router/blob/master/docs/api/create.md) takes


### Router#start(renderNode)

Starts listening to changes and renders active view to the given renderNode. renderNode must be a valid HTML element.

```js
var router = Router({
  // ... some route config
});
router.start(document.body);
```

### Router#stop()

Stops listening for changes from the location implementation.

This will start, render, then stop the router.
```js
var router = Router({
  // ... some route config
});
router.start(document.body);
router.stop();
```

### Router.ChildView

If you have a child route that is active, this is a component that represents that.

Pointer to [react-router.Routeview](https://github.com/rackt/react-router/blob/master/docs/api/components/Routeview.md)

### Router Locations

These are all [location implementations from react-router](https://github.com/rackt/react-router/blob/master/docs/api/misc/Location.md)

#### Router.locations.History

Uses HTML5 History API to provide location information. Pointer to [react-router.HistoryLocation](https://github.com/rackt/react-router/blob/master/locations/HistoryLocation.js).

#### Router.locations.Hash

Uses URL Hashbangs to provide location information. Pointer to [react-router.HashLocation](https://github.com/rackt/react-router/blob/master/locations/HashLocation.js).

#### Router.locations.Refresh

Uses full page refreshes. This is a fallback for when you don't want to use hashbangs (ugly) but you can't use the History implementation (browser support), you can use this. Pointer to [react-router.RefreshLocation](https://github.com/rackt/react-router/blob/master/locations/RefreshLocation.js).

### View Mixins

#### Router.mixins.State

Pointer to [react-router.State](https://github.com/rackt/react-router/blob/master/docs/api/mixins/State.md).

Provides some utilities for getting the current state of the router from the view it is mixed into.

#### Router.mixins.Navigation

Pointer to [react-router.Navigation](https://github.com/rackt/react-router/blob/master/docs/api/mixins/Navigation.md).

Provides some utilities for linking to, triggering, and sending data to other routes to the view it is mixed into.

### Server-side rendering

Is supported. Docs coming soon.

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
