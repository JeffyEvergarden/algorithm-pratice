function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

let a = new TreeNode(0)
let b = new TreeNode(1)
let c = new TreeNode(2)
let d = new TreeNode(3)
let e = new TreeNode(4)
let f = new TreeNode(5)

a.left = b
a.right = c
b.left = d
c.right = e
e.left = f

// 第一种方式 递归
function deepTravel(root) {
  let list = []
  function dep(node) {
    if (!node) {
      return
    }
    list.push(node.val)
    dep(node.left)
    dep(node.right)
  }
  dep(root)
  return list
}

// 第一种方式 用栈
function deepTravel2(root) {
  let list = []
  let stack = [root]
  while (stack.length > 0) {
    let node = stack.pop()
    list.push(node.val)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return list
}

console.log(deepTravel2(a))
