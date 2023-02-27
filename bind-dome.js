function fn1(a, b, c) {
    console.log('this', this)
    console.log(a, b, c)
    return 'this is fn1'
}

const fn2 = fn1.bind({ x: 100 }, 10, 20, 30)
const res = fn2()
console.log(res)

// 手写模拟 bind 
Function.prototype.bind1 = function () {
    // 将参数拆解成数组  用arguments
    const argus = Array.prototype.slice.call(arguments)

    //  获取数组的第一项
    const t = argus.shift()
    // fn1.bind(...) 中的fn1
    const self = this
    // 返回一个函数
    return function () {
        return self.apply(t, argus)
    }
}