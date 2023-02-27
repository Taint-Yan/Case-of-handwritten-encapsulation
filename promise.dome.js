const url1 = 'https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg'
const url2 = 'https://img3.mukewang.com/5a9fc8070001a82402060220-100-100.jpg'

function loadImag(src) {
    const p = new Promise(
        (resolve, reject) => {
            const img = document.createElement('img')
            img.onload = () => {
                resolve(img)
            }
            img.onerror = () => {
                const err = new Error(`图片加载失败 ${src}`)
                reject(err)
            }
            img.src = src
        }
    )
    return p
}
loadImag(url1).then((img1) => {
    console.log(img1.width)
    return loadImag(url2)
}).then(img2 => {
    console.log(img2.height)
})