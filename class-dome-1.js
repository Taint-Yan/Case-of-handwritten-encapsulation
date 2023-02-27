class People {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
}

class Student extends People {
    constructor(name, number) {
        super(name),
            this.number = number
    }
    sayHi() {
        console.log(`姓名${this.name},学号${this.number}`)
    }
}

class Teacher extends People {
    constructor(name, major) {
        super(name),
            this.major = major
    }

    sayHello() {
        console.log(`班主任${this.name}, 教授${this.major}`)
    }

}

const xiaLuo = new Student('夏洛', '20')
console.log(new Student)
console.log(xiaLuo)
xiaLuo.sayHi()

const teacher = new Teacher('王老师', '语文')
console.log(teacher)
console.log(teacher.major)
teacher.sayHello()