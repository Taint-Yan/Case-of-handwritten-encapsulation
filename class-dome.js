class Student {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    sayHi() {
        console.log(`姓名 ${this.name},年龄 ${this.age}`)
    }
}

// 通过类 new 对象/实例

const xiaLuo = new Student('夏洛', '20')

console.log(xiaLuo)
xiaLuo.sayHi()