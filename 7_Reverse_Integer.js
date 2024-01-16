// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
//
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
//
//
//
// Example 1:
//
// Input: x = 123
// Output: 321
// Example 2:
//
// Input: x = -123
// Output: -321
// Example 3:
//
// Input: x = 120
// Output: 21
// Example 4:
//
// Input: x = 0
// Output: 0
//
//
// Constraints:
//
//     -2^31 <= x <= 2^31 - 1
const n = [123, -123, 120, 0, 1534236469, 1563847412];

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    let sign = x < 0 ? -1 : 1;
    let rev = Math.abs(x).toString().split('').reverse().join('');
    console.log(parseInt(rev.slice(0,-1)));
    console.log(parseInt(rev.slice(-1)));
    if(parseInt(rev.slice(0,-1)) >= 214748365 || (parseInt(rev.slice(0,-1)) > 214748364 && parseInt(rev.slice(-1)) > 8))
        return 0;
    return rev * sign;
};

n.forEach(item => console.log(`${item} : ${reverse(item)}`));
