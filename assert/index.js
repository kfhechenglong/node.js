const assert = require('assert');
// 失败，因为1 !== '1'
assert.deepStrictEqual({a: 1}, {a: '1'});
// console.log(assert)
// 一下对象没有自身属性
const date = new Date();
const obj = {};
const fakeDate = {};
Object.setPrototypeOf(fakeDate, Date.prototype);
// 原型不同
assert.deepStrictEqual(obj, fakeDate);