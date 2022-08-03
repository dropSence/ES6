const obj = {
    id: '1234567',
    init: function () {
        console.log('普通函数的this：', this);
    },
    doSomething: () => {
        console.log('箭头函数的this：', this);
    }
}
// obj.doSomething()
// obj.doSomething.call({ id: 1 })
obj.init.call({ id: 1 })
obj.init()