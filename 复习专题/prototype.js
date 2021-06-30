// 原型链相关
class A {}
class C {}

class B extends A {}

var a = new A()

var b = new B()

var c = new C()

console.log(a.__proto__ === A.prototype) // 是同一个对象 true

console.log(b.__proto__ === B.prototype) // true

console.log(a.__proto__ === b.__proto__.__proto__) // true

console.log(a.__proto__ === c.__proto__) // false

console.log(a.__proto__.__proto__ === c.__proto__.__proto__) // true
