// 查找两个节点的最近的一个共同父节点，可以包括节点自身
// 输入描述：
// oNode1 和 oNode2 在同一文档中，且不会为相同的节点

function commonParentNode(oNode1, oNode2) {
  let node = null
  while (oNode1) {
    if (oNode1.contains(oNode2)) {
      node = oNode1
      break
    }
    oNode1 = oNode1.parentNode
  }
  return node
}

function fake() {
  var parent = document.createElement('DIV')
  var a = document.createElement('DIV')
  var b = document.createElement('DIV')
  parent.appendChild(a)
  parent.appendChild(b)
  var c = commonParentNode(a, b)
  return c === parent
}
