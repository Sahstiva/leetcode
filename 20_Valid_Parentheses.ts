// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
//   An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
//   Open brackets must be closed in the correct order.
//   Every close bracket has a corresponding open bracket of the same type.
//
//
//   Example 1:
//
// Input: s = "()"
// Output: true
// Example 2:
//
// Input: s = "()[]{}"
// Output: true
// Example 3:
//
// Input: s = "(]"
// Output: false
//
//
// Constraints:
//
//   1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

function isValid(s: string): boolean {
  if (s.length % 2 > 0) return false;
  const parenthesesMap = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
  const stack: string[] = [];
  for(let i = 0; i < s.length; i++) {
    if (parenthesesMap.has(s[i])) {
      stack.push(s[i]);
    } else {
      if (stack.length === 0 || parenthesesMap.get(stack.pop() || '') !== s[i]) {
        return false;
      }
    }
  }
  return !stack.length;
}
const tests = ['()', '()[]{}', '(]'];
tests.forEach(test => console.log(isValid(test)));
