// 闭包隐藏数据 只提供API
function createdCache() {
    const data = {} //闭包中的数据被隐藏，不被外界访问
    return {
        set: function (key, val) {
            data[key] = val
        },
        get: function (key) {
            return data[key]
        }
    }
}

const c = createdCache()
c.set('a', 300)
console.log(c.get('a'))
