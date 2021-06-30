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

function breadthTraver(root) {
  let list = []
  let nodelist = [root]
  while (nodelist.length > 0) {
    let node = nodelist.shift()
    list.push(node.val)
    if (node.left) {
      nodelist.push(node.left)
    }
    if (node.right) {
      nodelist.push(node.right)
    }
  }
  return list
}

function floorTraver(root) {
  let list = []
  let nodelist = [root]
  function traver(arr) {
    if (arr.length === 0) {
      return
    }
    list.push(arr)
    let nextFloor = []
    for (let i = 0; i < arr.length; i++) {
      let node = arr[i]
      if (node.left) {
        nextFloor.push(node.left)
      }
      if (node.right) {
        nextFloor.push(node.right)
      }
    }
    traver(nextFloor)
  }
  traver(nodelist)
  return list
}

console.log(breadthTraver(a))
console.log(floorTraver(a))
