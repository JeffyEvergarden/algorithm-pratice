function Person(name) {
  this.name = name
  this.speak = function () {
    console.log(this.name)
  }
}

function Children(name) {
  let a = new Person(name)
  return Object.create(a)
}


let a = new Children('aaa')

console.log(a.name)

a.speak()