// 最小深度
var minDepth = function (root) {
  if (!root) {
    return 0
  }
  // 没有节点
  if (!root.left && !root.right) {
    return 1
  }

  let leftMin = minDepth(root.left)
  let rightMin = minDepth(root.right)

  if (!root.left || !root.right) {
    return leftMin + rightMin + 1
  }

  return Math.min(leftMin, rightMin) + 1
}
