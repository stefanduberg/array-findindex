# array-findindex

## Usage

```javascript
var findIndex = require('array-findindex');
var array = ['a', 'b', 'c', 'd'];

findIndex(array, function (element, index, arr) {
  return element === 'c';
});
// => 2


findIndex(array, function (element, index, arr) {
  return element === 'z';
});
// => -1

```
Optionally pass in an object as third argument to use as ``this`` when executing callback. 

## Install

```bash
$ npm install array-findindex
```
