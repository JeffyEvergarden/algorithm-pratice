/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 非递归方式
var midTraversal2 = function (root) {
  let arr = []
  if (!root) {
    return []
  }
  let stack = [root]
  let typeStack = [0]
  while (stack.length > 0) {
    let node = stack.pop()
    let type = typeStack.pop()
    switch (type) {
      case 0:
        stack.push(node)
        typeStack.push(1)
        if (node.left) {
          stack.push(node.left)
          typeStack.push(0)
        }
        break

      case 1:
        stack.push(node)
        typeStack.push(2)
        arr.push(node.val)
        break
      case 2:
        if (node.right) {
          stack.push(node.right)
          typeStack.push(0)
        }
        break
      default:
        break
    }
  }
  return arr
}
