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
    // { string: 'PAYPALISHIRING', rows:3},  // "PAHNAPLSIIGYIR"
    // { string: 'PAYPALISHIRING', rows:4}, // "PINALSIGYAHRPI"
    // { string: 'A', rows:1}, // "A"
    { string: 'AB', rows: 1}
];
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
    if(numRows === 1) return s;
    const midRows = numRows - 2;
    const arr = [];
    let i = 0, j = 0;
    while(i < s.length) {
            arr[j] = (j === 0 || j % 2 === 0) ? s.substring(i, i += numRows) : s.substring(i, i += midRows);
            j++;
    }
    let resStr = '';
    for(let row = 0; row < numRows; row++) {
        for(let i = 0; i < arr.length; i++) {
            const char = (i === 0 || i % 2 === 0) ? arr[i].charAt(row) : row === 0 || row === numRows - 1 ? '' : arr[i].charAt(midRows - row);
            resStr = resStr.concat(char);
        }
    }
    return resStr;
};

s.forEach(item => console.log(convert(item.string, item.rows)));

