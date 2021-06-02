
// 描述
// 输入一个链表，输出该链表中倒数第k个结点。
// 如果该链表长度小于k，请返回空。

function FindKthToTail(pHead, k) {
  // write code here
  let vhead = new ListNode(0)
  let p = vhead
  vhead.next = pHead
  while (--k && p) {
    p = p.next
  }
  console.log(p)
  if (k > 0 || !p) {
    return null
  }
  if (!p.next) {
    return null
  }
  while (p.next) {
    p = p.next
    vhead = vhead.next
  }
  return vhead
}
