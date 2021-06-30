// 链表反转

function reverseList(head) {
  if (head === null || head.next === null) {
    return head
  }
  let tail = head.next
  let p = reverseList(head.next)
  head.next = tail.next
  tail.next = head
  return p
}
