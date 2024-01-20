const l1 = [
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [2,4,9],
    [2,4,3], // Output: [7,0,8]
    [0], // Output: [0]
    [9,9,9,9,9,9,9] // Output: [8,9,9,9,0,0,0,1]
    ];
    l2 = [
        [5,6,4],
        [5,6,4,9],
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
    const s1 = createArrayFromList(l1).reverse().join('');
    const s2 = createArrayFromList(l2).reverse().join('');
    const arr = (BigInt(s1) + BigInt(s2)).toString().split('').reverse();
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

