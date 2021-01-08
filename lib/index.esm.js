/**
 * 返回 hello 开头的字符串
 * @param str - input string
 * @returns 'hello xxx'
 * @example
 * ```ts
 * myFirstFunc('ts') => 'hello ts'
 * ```
 */
function myFirstFunc(str) {
  var _obj$name;

  var obj = {
    name: null
  };
  return "hello ".concat(str, " ").concat((_obj$name = obj === null || obj === void 0 ? void 0 : obj.name) !== null && _obj$name !== void 0 ? _obj$name : 'world!');
}
/**
 * sleep await function
 * @param timeout number default 1e3
 */

function sleep() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1e3;
  return new Promise(function (resolve) {
    setTimeout(resolve, timeout);
  });
}

export default myFirstFunc;
export { sleep };
