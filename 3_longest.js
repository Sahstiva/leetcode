// 3. Longest Substring Without Repeating Characters
//
// Given a string s, find the length of the longest substring without repeating characters.

//     Example 1:
//
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
//     Example 4:
//
// Input: s = ""
// Output: 0
//
//
// Constraints:
//
//     0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
const s = [
    'abcabcbb', // Output: 3
    'bbbbb', // Output: 1
    'pwwkew', // Output: 3
    '', // Output: 0
    ' ',
    'a'
];

const lengthOfLongestSubstring = function(s) {
    let arr = s.split('');
    if(arr.length === 1) return 1;
    let longest = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        let j = i + 1;
        let sub = [arr[i]];
        while(!sub.find(item => arr[j] === item) && j < arr.length) sub.push(arr[j++]);
        if(sub.length > longest) longest = sub.length;
    }
    return longest;
};

s.forEach(item => console.log(lengthOfLongestSubstring(item)));
