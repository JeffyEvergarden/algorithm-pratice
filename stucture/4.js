// 数组判环

function hasCycle(head) {
  // write code here
  if (!head || !head.next) {
    return false
  }
  let p = head
  let q = head
  let flag = false
  do {
    p = p.next
    q = q.next.next
    if (p === q) {
      flag = true
      break
    }
  } while (q && q.next)
  return flag
}
