// leetcode 257
// 257. 二叉树的所有路径

let arr = []
function getPath(node, currentPath) {
    if (!node) {
        return
    }
    if (!node.left && !node.right) {
        currentPath.push(node)
        arr.push(currentPath)
    }
    if (node.left) {
        getPath(node.left, [...currentPath, node])
    }
    if (node.right) {
        getPath(node.right, [...currentPath, node])
    }
}
getPath(root, [])

let newArr = arr.map(list => {
    return list.map(item => item.val).join('->')
})
console.log(newArr)
return newArr
};