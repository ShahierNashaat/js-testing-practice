class Calculator {
  add = (num1, num2) => num1 + num2

  subtract = (num1, num2) => num1 - num2

  divide = (num1, num2) => {
    if (num2 !== 0) {
      return num1 / num2;
    }
    throw new Error('dividion by 0 not allowed');
  }

  multiply = (num1, num2) => num1 * num2
}

module.exports = new Calculator();