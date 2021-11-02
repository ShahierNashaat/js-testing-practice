const calculator = require('./calculator');

describe('calculator', () => {
  test('Test add method', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(5, 5)).toBe(10);
  });

  test('Test subtract method', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(1, 5)).toBe(-4);
  });

  test('Test divide method', () => {
    expect(calculator.divide(2, 1)).toBeCloseTo(2);
    expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
    expect(calculator.divide(9, 3)).toBeCloseTo(3);
  });

  test('Test multiply method', () => {
    expect(calculator.multiply(2, 1)).toBe(2);
    expect(calculator.multiply(5, 2)).toBe(10);
    expect(calculator.multiply(2, 3.5)).toBe(7);
  });
});