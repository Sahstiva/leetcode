// 6. Zigzag Conversion
//
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
//
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
//
// Write the code that will take a string and make this conversion given a number of rows:
//
//     string convert(string s, int numRows);
//
//
// Example 1:
//
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:
//
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:
//
// Input: s = "A", numRows = 1
// Output: "A"
//
//
// Constraints:
//
//     1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000
const s = [
    { string: 'PAYPALISHIRING', rows:3},  // "PAHNAPLSIIGYIR"
    { string: 'PAYPALISHIRING', rows:4}, // "PINALSIGYAHRPI"
    { string: 'A', rows:1} // "A"
];
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
    if(s.length === 1) return s;
    let i = 0;
    let s_first = '';
    while(i < s.length) {
        s_first += s.charAt(i);
        i += numRows + numRows -2;
    }
    let s_last = '';
    i = numRows - 1;
    while(i < s.length) {
        s_last += s.charAt(i);
        i += numRows + numRows -2;
    }
    let str = [];
    for(let j = numRows - 2; j > 0; j--) {
      str[j] = '';
      i = numRows - 2;
      while(i < s.length) {
          str[j] += s.charAt(i) + ((i + 2) < s.length) ? s.charAt(i +2) : '';
          i += numRows * 3 - 2;
      }
      console.log(str[j]);
    }
    console.log(s_first);
    console.log(s_last);
    return s_first + str.join('') + s_last;
};

s.forEach(item => console.log(convert(item.string, item.rows)));
