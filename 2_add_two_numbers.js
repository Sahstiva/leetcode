const l1 = [
    [2,4,3], // Output: [7,0,8]
    [0], // Output: [0]
    [9,9,9,9,9,9,9] // Output: [8,9,9,9,0,0,0,1]
    ];
    l2 = [
        [5,6,4],
        [0],
        [9,9,9,9]
        ];
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
l1.forEach((item,index) => console.log(JSON.stringify(addTwoNumbers(createListFromArray(l1[index]), createListFromArray(l2[index])))));

function addTwoNumbers(l1,l2) {
    let sum = 0;
    const a1 = createArrayFromList(l1);
    const a2 = createArrayFromList(l2);
    for(let i = 0; i < Math.max(a1.length, a2.length); i++) {
        sum += (i < a1.length ? a1[a1.length - 1 - i] : 0) * Math.pow(10,i) + (i < a2.length ? a2[a2.length - 1 - i] : 0) * Math.pow(10,i);
    }
    const arr = sum.toString().split('').reverse();
    return createListFromArray(arr);
}

function createListFromArray(arr) {
    const list = new ListNode(arr.shift());
    let _list = list;
    for (const node of arr) {
        _list.next = new ListNode(node);
        _list = _list.next;
    }
    return list;
}

function createArrayFromList(list) {
    let arr = [];
    if(list.next !== null) {
        arr = [list.val, ...createArrayFromList(list.next)];
    } else {
        arr = [list.val];
    }
    return arr;
}
