

/**
 * 创建10个 <a></a>标签，点击的时候弹出对应的序号
 */
// let i, a   // 每次弹出来的都是10 因为i是全局作用域里面
// for (i = 0; i < 10; i++) {
//     a = document.createElement('a')
//     a.innerHTML = i + '<ar>'
//     a.addEventListener('click', function (e) {
//         e.preventDefault();
//         alert(i)
//     })
//     document.body.appendChild(a)
// }

let a // 点击每次弹出来的都是 对应的序号，因为有块级作用域
for (let j = 0; j < 10; j++) {
    a = document.createElement('a')
    a.innerHTML = j + '<ar/>'
    a.addEventListener('click', function (e) {
        e.preventDefault()
        alert(j)
    })
    document.body.appendChild(a)
}