// 最大深度

var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  if (!root.left && !root.right) {
    return 1
  }
  let lm = maxDepth(root.left)
  let rm = maxDepth(root.right)
  if (!root.left || !root.right) {
    return rm + lm + 1
  }
  return Math.max(lm, rm) + 1
}
