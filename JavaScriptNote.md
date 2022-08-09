[toc]



JS Fundamental

## What is JaveScript 什么是JS



![image-20220728123814825](https://vip2.loli.io/2022/07/28/CRUdoSvuV16TjI8.png)

## JS 用来干什么

HTML  is responsible for Content of Page  是名词

css  is style presentation of that content  是形容词 修饰名词

JS dynamic interact effect 是动词  告诉名词做什么

![image-20220728124323543](https://vip2.loli.io/2022/07/28/NoQKdFP5mjnWcpA.png)

Link Script to html file

```javascript
//一般在Body 
<body>
      <script src="script.js"></script>
</body>
```

## Data Type

1. Number     像 float
2. String 
3. Boolean
4. undefined 声明了 但是没有赋值
5. Null  Also  mean Empty Value
6. Symbol  (ES2015)  声明一个变量无法改变  像 const
7. BigInt (ES2020)

### Dynamic Type 

## 激活strict  Mode

```javascript
'use strict'
```

## 函数的三种写法

```javascript
//普通函数
function calcAge1(birstYear) {
     return 2022 - birstYear;
 }
//匿名函数
const calcAge2 = function (birstYear) {
     return 2022 - birstYear;
}
//Arrow 函数 没有指定this关键字
const calcAge3 = birthYear => 2022 - birthYear;

```

## Array

```javascript
const friends = ["a", "b", "c"];
console.log(friends)

const years = new Array(1991, 1992, 1993);
console.log(years)

//Array 可以储存不同类型的数据
const wang = ["wang", "yitao", 2022 - 1992]
console.log(wang)

//Add Elements
//push返回的是新的数组的长度
friends.push("wang");
console.log(friends)

//添加到头部
friends.unshift("yi");
console.log(friends)

//remove element
//返回 取出来的值
const poped = friends.pop();
console.log(friends)
console.log(poped)

//返回第一个元素
const shift = friends.shift();
console.log(friends)
console.log(shift)

//返回index
console.log(friends.indexOf("c"))
console.log(friends.indexOf("d"))

//返回true fa lse
console.log(friends.includes("c"))
console.log(friends.includes("d"))
```

## Object

```javascript
const wang = {
    firstName: "wang",
    lastName: "yitao",
    age: 2022 - 1992,
    job: 'teacher',
    friends: ["a", "b", "c"]
}
//可以通过字符串查询
console.log(wang)
console.log(wang.firstName)
console.log(wang["firstName"])
console.log(wang["lastName"])
```

```javascript
//弹窗
prompt("what do you want to know")
//添加元素 像字典一样
wang.location = "janpan";
//可以通过.直接添加元素 进入Object
console.log(wang)

```

```java
const wang = {
    firstName: "wang",
    lastName: "yitao",
    birthYear: 1992,
    job: 'teacher',
    friends: ["a", "b", "c"],
    hasDriversLicense: true,

    calcAge: function (birstYear) {
        return 2022 - birstYear
            ;
    }
}
```

## 常用插件

Prettier

MonokaiPro

todoHeight

node js 

npm install live-server

## HLSL CSS

! + Tab 快速生成 HTML file

- Attribute
- class 是重复的
- id 必须是唯一的

HTML 链接CSS

```html
<head>
<link *href*="style.css" *rel*="stylesheet" />
</head>
```

css 查询html 组件

```css
.class
#id
* 选择所有元素
H1 {
    
}
input, button{
    
}
```

![image-20220802171138033](https://vip2.loli.io/2022/08/02/KsfqwaxXgAPTvQL.png)

content 具体内容的高和宽

padding 内部与盒子边框的距离

margin 外部与盒子边框的距离

javaScripts 

```css
document.querySelector('.message').textContent
```

## DOM Document Object Model

![image-20220802100143859](https://vip2.loli.io/2022/08/02/kFqTwXCUMZ9p12S.png)

## 提前写好class

```css
.hidden {
  display: none;
}
```

### 在JS里调用

```javascript
 modal.classList.add('hidden');
 modal.classList.remove('hidden');
```

Compilation

Interpretation

Just-in-time

## Destructuring Array

```javascript
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
```

解构 交换元素 Switching Variable

```javascript
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);
```

```javascript
//Receive two return function
const [starter, mainCource] = restaurant.order(2, 0);
```

跳过元素

```javascript
const nest = [2, 4, [5, 6]];

const [i, , j] = nest;
console.log(i, j);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

```

## Destructuring Object

用{}来解构 Object

```java
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//用新名字
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//设置默认值
const { menu = [], starterMenu, starter = [] } = restaurant;

console.log(menu, starter);

// mutating variable
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

console.log(a, b);

```



## Spread 展开符号

可以拼接数组

