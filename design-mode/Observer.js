// 主题对象
class Subject {
  constructor() {
    this.state = {}
    this.observers = []
  }

  getState() {
    return this.state
  }

  setState(state) {
    this.state = state
    this.notifyAllObservers()
  }

  notifyAllObservers() {
    this.observers.forEach((observer) => {
      observer.update()
    })
  }

  attach(observer) {
    this.observers.push(observer)
  }
}

// 观察者
class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }

  update() {
    console.log(`${this.name} update, state: ${this.subject.getState()}`)
  }
}

// 测试

let sub = new Subject()

let ob1 = new Observer('Confidence', sub)
let ob2 = new Observer('Java', sub)
let ob3 = new Observer('NodeJs', sub)

sub.setState(1)
