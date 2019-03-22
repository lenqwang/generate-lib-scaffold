/*!
  * js-lib-demo.js v0.0.1
 * (c) 2018-2019 lenq<qqcome110@gmail.com>
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var name = 'jake';

console.log('Hello ' + name + '!');

})));
