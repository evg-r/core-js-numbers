function getRectangleArea(a, b) {
  return a * b;
}

function getCircleCircumference(a) {
  return a * 2 * Math.PI;
}
/**
 * Returns an average of two given numbers.
 *
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(a, b) {
  return (a + b) / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
function getLinearEquationRoot(a, b) {
  return -b / a;
}
function getAngleBetweenVectors(x1, y1, x2, y2) {
  return Math.acos(x1 * x2 + y1 * y2);
}
function getLastDigit(value) {
  return value % 10;
}

function parseNumberFromString(value) {
  const result = Number(value);
  return result;
}
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

/**
 * Returns the number rounded to specified power of 10.
 *
 * @param {number} num
 * @param {number} pow
 * @return {number}
 *
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
function roundToPowerOfTen(num, pow) {
  return num.toPrecision(pow);
}
function isPrime(n) {
  for (let i = 2; i <= 10; i += 1) {
    if (n % i === 0) return true;
  }
  return false;
}

/**
 * Tries to convert value to number and returns it if conversion was successful;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(value, def) {
  if (Number.isFinite(value) === 'true') {
    return value;
  }
  return def;
}
function getCube(num) {
  return num ** 3;
}

/**
 * Returns the Fibonacci number located at the index position.
 *
 * @param {number} index
 * @return {number}
 *
 * @example:
 *   0  => 0
 *   1  => 1
 *   2  => 1
 *   3  => 2
 *   10 => 55
 */
function getFibonacciNumber(/* index */) {
  throw new Error('Not implemented');
}
function getSumToN(n) {
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    result += i;
  }
  return result;
}

/**
 * Returns the sum of the digits of a given number.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   123 => 6  // (1+2+3)
 *   202 => 4  // (2+0+2)
 *   5   => 5  // 5
 */
function getSumOfDigits(/* num */) {
  throw new Error('Not implemented');
}

/**
 * Returns true if the given number is a power of two, false otherwise.
 *
 * @param {number} num
 * @return {boolean}
 *
 * @example:
 *   4   => true
 *   16  => true
 *   15  => false
 */
function isPowerOfTwo(/* num */) {
  throw new Error('Not implemented');
}

function getSine(num) {
  return Math.sin(num);
}

/**
 * Returns a string representation of a number in a specified base (radix).
 *
 * @param {number} number
 * @param {number} base
 * @return {string}
 *
 * @example:
 * 255, 16 => 'ff'
 * 2, 2    => '10'
 */
function numberToStringInBase(/* number, base */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string representation of a number in exponential notation.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '1.23e+4'
 */
function toExponential(/* number, fractionDigits */) {
  throw new Error('Not implemented');
}
function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}
function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

function getNumberValue(number) {
  return number.valueOf();
}

/**
 * Returns a boolean value indicating whether the parameter is a number or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * Infinity => false
 * NaN      => false
 * 0        => true
 * 'a' / 1  => false
 * 'a'      => false
 * 5        => true
 * '5'      => false
 */
function isNumber(number) {
  return Number.isFinite(number);
}

/**
 * Returns a boolean value indicating whether a number is an integer or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 5    => true
 * 5.1  => false
 * '5'  => false
 */
function isInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns a floating point number or, if the number cannot be parsed from the argument, returns NaN.
 *
 * @param {string} str
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh' => 4.567
 * 'abcdefgh'      => NaN
 */
function getFloatOnString(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Returns an integer of the specified base or, if the number cannot be parsed
 * from the argument, returns NaN.
 *
 * @param {string} str
 * @param {number} base
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh', 10  => 4
 * 'abcdefgh', 10       => NaN
 * '1.234', 2           => 1
 * '10', 8              => 8
 */
function getIntegerOnString(/* str, base */) {
  throw new Error('Not implemented');
}

/**
 * Returns whether a number is a safe integer.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 10       => true
 * 3.5      => false
 * 2 ** 53  => false
 */
function isSafeInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the smallest integer less than or equal to a given number.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.9  => 5
 * -5.1 => -6
 */
function roundToSmallestInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the largest integer greater than or equal to a given number.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.1  => 6
 * -5.9 => -5
 */
function roundToLargestInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the value of a number rounded to the nearest integer.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 6
 * 5.4  => 5
 * -5.5 => -5
 */
function roundToNearestInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the integer part of a number by removing any fractional digits.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 5
 * 5.4  => 5
 * -5.5 => -5
 */
function getIntegerPartNumber(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the sum of numbers.
 *
 * @param {number} x1
 * @param {number} x2
 * @param {number} x3
 * @returns {number}
 *
 * @example:
 * 1, 2, 3       => 6
 * 0.1, 0.2, 0.3 => 0.6
 */
function getSumOfNumbers(/* x1, x2, x3 */) {
  throw new Error('Not implemented');
}

function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns the length of the hypotenuse of a right triangle.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 * 3, 4 => 5
 */
function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}

/**
 * Returns count of odd numbers from zero to the resulting number.
 * The resulting number is taken into account.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 4  => 2
 * 5  => 3
 * 10 => 5
 * 15 => 8
 */
function getCountOfOddNumbers(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
