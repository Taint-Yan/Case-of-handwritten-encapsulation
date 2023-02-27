// for……of 异步遍历数组
function muti(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000);
    })
}

const nums = [6, 8, 10]


// nums.forEach(async (i) => {
//     const res = await muti(i)
//     console.log(res)
// }) // 同步的结果，一秒钟同时打印出来

!(async function () {
    for (let i of nums) {
        const res = await muti(i)
        console.log(res)
    }
})() // 异步执行分别在一秒打印出 36 64 100
