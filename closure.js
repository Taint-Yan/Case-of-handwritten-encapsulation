// 函数做为返回值
// function created() {
//     const a = 100
//     return function () {
//         console.log(a)
//     }
// }
// const fn = created()
// const a = 200
// fn()

// 函数做为参数被传递

function print(fn) {
    const a = 200
    fn()
}
const a = 100
function fn() {
    console.log(a)
}
print(fn)

//  所有自由变量的查找，是在函数定义的地方，向上级作用域查找不是在执行的地方
// this取什么值是在函数执行的时候，不是在函数定义的时候