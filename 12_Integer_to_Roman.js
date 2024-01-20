// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//
//     Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
//
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//
//     I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.
//
//
//
//     Example 1:
//
// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
//     Example 2:
//
// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:
//
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
//
//
// Constraints:
//
//     1 <= num <= 3999

const test = [3, 58, 1994];
const romanMap = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
];
const replaces = [
    ['DCCCC', 'CM'],
    ['CCCC', 'CD'],
    ['LXXXX', 'XC'],
    ['XXXX', 'XL'],
    ['VIIII', 'IX'],
    ['IIII', 'IV']
];
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let rest = num;
    let roman = '';
    for(const match of romanMap) {
        const [n, r] = getRoman(rest, match[1]);
        rest = r;
        roman = n ? roman + match[0].repeat(n) : roman;
    }
    for(const rep of replaces) {
        roman = roman.replace(rep[0], rep[1]);
    }
    return roman;
};

function getRoman(num, match) {
    const n = Math.floor(num / match);
    return [n, num - match * n];
}

test.forEach(n => console.log(intToRoman(n)));
