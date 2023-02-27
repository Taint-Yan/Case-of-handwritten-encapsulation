/**
 * 深拷贝
 */

const obj1 = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'wuhan'
    },
    arr: ['a', 'b', 'c']
}
const obj2 = deepClone(obj1)
obj2.address.city = 'suzhou'
console.log(obj1.address.city)
console.log(obj2.address.city)

function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        return obj
    }
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }
    return result
}