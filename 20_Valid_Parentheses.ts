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
