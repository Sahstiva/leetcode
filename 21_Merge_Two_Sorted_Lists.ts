// You are given the heads of two sorted linked lists list1 and list2.
//
//   Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
//
//   Return the head of the merged linked list.
//
//
//
//   Example 1:
//
//
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:
//
// Input: list1 = [], list2 = []
// Output: []
// Example 3:
//
// Input: list1 = [], list2 = [0]
// Output: [0]
//
//
// Constraints:
//
//   The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
  this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
      }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  if (list1.val <= list2.val) {
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
  } else {
      list2.next = mergeTwoLists(list1, list2.next);
      return list2;
  }
}

function createListFromArray(arr: number[]): ListNode {
  const list = new ListNode(arr.shift());
  let _list = list;
  for (const node of arr) {
    _list.next = new ListNode(node);
    _list = _list.next;
  }
  return list;
}

function createArrayFromList(list: ListNode): number[] {
  let arr: number[] = [];
  if(list.next !== null) {
    arr = [list.val, ...createArrayFromList(list.next)];
  } else {
    arr = [list.val];
  }
  return arr;
}

const list1 = [1,2,4], list2 = [1,3,4];
console.log(createArrayFromList(mergeTwoLists(createListFromArray(list1), createListFromArray(list2)) || createListFromArray([])));
