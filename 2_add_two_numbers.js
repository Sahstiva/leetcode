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
l1.forEach((item,index) => console.log(addTwoNumbers(l1[index], l2[index])));
// console.log(addTwoNumbers(l1, l2));

function addTwoNumbers(l1,l2) {
    let sum = 0;
    let list = new ListNode(0);
    for(let i = 0; i < Math.max(l1.length, l2.length); i++) {
        // console.log(i,l1[l1.length - 1 - i],l2[l2.length - 1 - i],Math.pow(10,i));
        sum += (i < l1.length ? l1[l1.length - 1 - i] : 0) * Math.pow(10,i) + (i < l2.length ? l2[l2.length - 1 - i] : 0) * Math.pow(10,i);
    }
    sum.toString().split('').reverse().forEach(node => {
        list.next = new ListNode(node);
        list = list.next;
    });
    return list;
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}
