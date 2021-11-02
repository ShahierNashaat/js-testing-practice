const { stringLength, reverseString, capitalize } = require('./test_practice');

test('length of "Hello" is 5', () => {
  expect(stringLength('Hello')).toBe(5);
});

test('expected "HelloHello" throw error ', () => {
  expect(() => stringLength('HelloHello')).toThrow();
  expect(() => stringLength('HelloHello')).toThrow(Error);
  expect(() => stringLength('HelloHello')).toThrow('String length must be at least 1 and not longer than 10');
});

test('expected "" throw error ', () => {
  expect(() => stringLength('')).toThrow();
  expect(() => stringLength('')).toThrow(Error);
  expect(() => stringLength('')).toThrow('String length must be at least 1 and not longer than 10');
});

test('reversed value of "Hello" is "olleH"', () => {
  expect(reverseString('Hello')).toMatch('olleH');
});

test('test capitalize method"', () => {
  expect(capitalize('hello')).toMatch('Hello');
  expect(capitalize('hello World')).toMatch('Hello World');
  expect(capitalize('Hello')).toMatch('Hello');
  expect(capitalize('h')).toMatch('H');
  expect(capitalize('')).toMatch('');
});