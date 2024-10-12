---
date: 2022-01-11
category:
  - 技术分享
tag:
  - javascript
---

# ES6学习笔记（持续更新）

let：声明变量，变量作用域在代码块里。这个很好用，直接解决了闭包变量问题。

let aaa = 'aaa'
const：声明常量，变量名一般用大写，块级作用域

const TEST = 'aaa'

ES6允许解构赋值，例如：

const NAME_LIST = ['aa', 'bbb', 'ccc']

let [n1, n2, n3] = NAME_LIST

const nameList = {
  name: 'aaa',
  age: 12,
  say: function() {
    console.log('aaa')
  }
}
let {name, age, sayHello} = nameList
sayHello()
模板字符串。内容里可以换行。

允许大括号里，直接写变量和函数。作为对象的属性和方法。

let name = 'aaa'
let change = function(){
  console.log('asdf')
}
const test = {
  name,
  change,
  say() {
    console.log('bbb')
  }
}
箭头函数，this始终指向声明时所在作用域的this，不能作为构造函数实例对象，不能使用arguments变量；当形参只有一个，可以省略小括号；当代码体只有一行，可以省略函数体花括号。
let say = (a,b) => {
  return a+b
}
say(1,2)
let test = n => n+1
test(1)
const arr = [1,2,3,4,5,6]
const result = arr.filter(item=>item %2 ===0)
可以给函数设置初始值。可以跟解构赋值结合

function add(a,b,c=11) {
  return a+b+c
}
let result = add(1,2);
function conn({host="127.0.0.1", username, passowrd, port}) {
  console.log(host)
}
conn({
  host: 'localhost',
  username: 'root',
  password: 'root',
  port: 3306
})
rest参数

function test(...args) {
   console.log(args) // args是数组
}

test('aaa', 'bbb', 'ccc')
...扩展运算符可以将数组转换为逗号分隔的“参数序列”

let test = ['aaa', 'bbb', 'ccc']
function say() {
  console.log(arguments)
}
say(...test)// == say('aaa', 'bbb', 'ccc')
可以用在数组合并


const arr1 = [111, 222]
const arr2 = [222, 333]
const result = [...arr1, ...arr2] // == [111, 222, 222, 333]

// 数组克隆
const arr3 = ['aa', 'bbb']
const arr4 = [..arr3] // ['aa', 'bbb']
Symbol数据类型，值是唯一的，不能运算，


let s = Symbol()
console.log(s)
let s2 = Symbol('name')
迭代器（iterator接口），for...of便利数组


const nameList = ['aa', 'bbb', 'ccc']
for(let n of nameLIst) {
  console.log(n)
}
生成器，一个特殊函数，用来异步编程


function * gen() {
  console.log("aaa")
}
let iterator = getn()
iterator.next()
Promise异步编程，Promise是一个构造函数。内部可以进行异步操作，获取成功或失败的结果


const p = new Promist(function(resolve, reject){
  setTimeout(()=>{
    resolve('ok')
  }, 1000)
})
// 调用
p.then(function(value){
  console.log(res)
}, function(reason){
  console.log(rej)
}).then(function(value1){}, function(reason1) {})
Set集合，会自动去重复元素


const s = new Set(['aa', 'bbb', 'cc', 'aa'])
console.log(s) // aa bbb cc
//数组长度 size
console.log(s.size)
// 添加元素
console.log(s.add('ddd'))
// 删除
console.log(s.delete('aa')) 
// 是否存在
console.log(s.has('bbb'))
// 清空
console.log(s.clear())

Map，键值对。


const m = new Map()
// 设置
m.set('name', 'aaa')
console.log(m)
// 取值
console.log(m.get('name'))
m.set('name', 'bbb')
console.log(m)
// 删除
m.delete('name')
console.log(m)
class 定义类



class Phone {
    static TYPE = 'PHONE'
    constructor(price) {
        this.price = price
    }
    call() {
        console.log('calling' + this.price)
    }
}

const phone = new Phone(111)
phone.call()
console.log(Phone.TYPE)

class SmartPhone extends Phone {
    constructor(brand, price) {
        super(price)
        this.brand = brand
    }

    play() {
        console.log('play')
    }
}

const smartPhone = new SmartPhone('huawei', 9999)
smartPhone.play()
smartPhone.call()
console.log(smartPhone)




数值扩展

Number.EPSILON 是javascript表示的最小精度，两个数字相差小于这个数就算相等

Number.isFinite 检测一个数值是否为有限数

Number.isNaN 检查一个数是否NaN

Number.parseInt Number.parseFloat 字符串转整数

Number.isInteger 判断数字是否为整数

Math.trunc 将数字的小数部分抹掉

Math.sign 判断一个数到底为正数 负数 还是零

Array.prototype.includes 判断数组中是否包含某个元素



async, await，异步编程。async定义的函数，返回一个promise对象。await必须在async函数内，await右侧必须是一promise对象，await的返回值是promise对象成功的返回值。



Object.keys获取对象的所有属性名，Object.values

Object.keys(obj)

Object.values(obj)


ES10：字符串 trimStart ，trimEnd清除字符串左右的空格



ES10：Array.property.flat，把多维数组变成一维数组。



ES11：私有属性 #



ES11：可选链操作符?.

原来的写法：const host = config && config.db && config.db.host

现在的写法：const host = config?.db?.host



ES11： globalThis 始终指向全局对象
