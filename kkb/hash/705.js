/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

class Node {
  constructor(key, next) {
    this.key = key
    this.next = next || null
  }
  insert_after(node) {
    node.next = this.next
    this.next = node
    return
  }
  remove_after() {
    if (this.next === null) return
    let p = this.next
    this.next = p.next
    return
  }
}

function hash_func(key){
  // console.log(key)
  // console.log(key & 0x7fffffff)
  // return key & 0x7fffffff
}


// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.data = new Array(100)
  this.
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (this.contains(key)) return
  let ind = hash_func(key) % this.data.length
  this.data[ind].insert_after(new Node(key))
  return
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  let ind = hash_func(key) % this.data.length
  let p =  this.data[ind]
  while(p.next && p.next.key !== key) p = p.next
  p.remove_after()
  return
}

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  let ind = hash_func(key) % this.data.length
  let p =  this.data[ind].next
  while(p && p.key !== key) p=p.next
  return !!p
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end
