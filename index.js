// // console.log("Javascript module");
// // console.log(add);

// // console.log(gfhgf);
// console.log(b);

// let a = 10;
// var b = 20;
// const c = 30;
// console.log(add(a, b));

// // console.log(a + b);
// function add(x, y) {
//   function sum(x, y) {
//     let sum = x + y;
//     return sum;
//   }
//   // let res = sum(x, y);
//   return res;
// }

// // var result = add(a, b);

// let a = undefined

// let a = new Date();

// if(a)console.log("a is not null");

// console.log( a);

// Primitive data types
// let a = 10;
// let b = "Hello";
// let c = true;
// let d = null;
// let e = undefined;

// non-primitive data types
// let f = { name: "John", age: 30 };
// let g = [1, 2, 3, 4, 5];
// let h = function () {
//   console.log("This is a function");
// };
// let i = new Date();
// let j = new Set();
// let k = new Map();

// let a = 10;
// let b = a;
// console.log(a, b);

// b = 20

// console.log(a, b);

// let a = { x: 10 }; // adress xyz23324hdf
// let b = a;

// console.log(a, b);

// a.x = 20;

// console.log(a, b);

// let a = [
//   1,
//   "Sachin",
//   null,
//   undefined,
//   { name: "John" },
//   function () {
//     console.log("Hello");
//   },
// ];

// console.log(typeof a);

// if(Array.isArray(a))console.log("a is an array");
// let g = "dgfd";
// console.log(Array.isArray(g));
// console.log(a);

// let a = [1 ,2 ];
// let a = new Array(4);
// console.log(a.length);

// let a = [1, "Sachin", null, undefined, 4, 5];

// console.log(a[a.length-1]);
// console.log(a);
// // a.push("last element");
// // a.unshift([1, "first element"]);

// // a.pop();
// // a.shift();
// console.log(a);

// let a = [1, 2, 4, 5];

// for(let i = 0 ; i<a.length; i++)console.log(a[i], i);
// let i = 0;
// while (i < a.length) {
//   console.log(a[i], i);
//   i++;
// }

// let b = a.forEach((v, i) => {
//   // console.log(v, i);
//   // return 2 * v;
// });
// let b = a.map((v, i) => {
//   // console.log(v, i);
//   // return 2 * v;
// });
// console.log(a);
// console.log(b);

// let b = a.filter((value, index) => {
//   return value % 2 === 0;
// });

// console.log(a);
// console.log(b);
// let sum = a.reduce((accumulator, current) => {
//   return accumulator + current;
// }, 0);

// console.log(sum);

// let a = [10, 2, 30, 4, 5];

// let c = a.slice(-2);
// console.log(a);
// console.log(c);

// let b = a.splice(1, 2, 4, 5, 6);
// console.log(a);
// console.log(b);
// let b = a.sort((a, b) => {
//   return b - a;
// });
// console.log(b);

// let a = [[], [], []];

// String in Js

// let str = "Sachin";
// str = "R" + str.slice(1);
// console.log(str[0]);

// let str = "rstring";
// let str1 = `it is also a string`;
// let str2 = "dfhg";
// let name = "Sachin";
// console.log(str.length);
// for(let i = 0 ; i<str.length; i++)console.log(str[i], i);

// console.log(str.slice(1, 4));
// console.log(str.substring(1, 4));

// if(str.indexOf("z") === -1)console.log("z is not present in the string");

// console.log(str.indexOf("r"));

// let str = "rstring";

// let substr = "ringx";

// console.log(str.includes(substr));

// let str = "I am a string.okay it is string";

// console.log(str.split("."));

// string vs String

// let str = "string";
// let str1 = new String("i am a string");
// console.log(typeof str);
// console.log(typeof str1);

// console.log("😀a".length);

// let obj = {x:1};
// let obj1 = obj;

// obj1.x = 2;

// console.log(obj, obj1);

// let obj = {name: "Rohit"};
// let obj = new Object();

// obj.name = "Rohit";

// console.log(obj);

// function User(name) {
//   this.name = name;
// }

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let user1 = new User("Rohit");

// console.log(user1);

// let user = { name: "Rohit", username: "hitman", password: "1234" };

// console.log(user.email?.toUpperCase());

// console.log(user["name"]);

// user.email = "email@gmail.com";

// delete user.password;

// console.log(user);

// let user = { name: "Rohit", username: "hitman" };
// // user.name = "New name";
// delete user.password;
// console.log(Object.keys(user));

// user.password = "1234";
// Object.defineProperty(user, "password", {
//   value: "1234",
//   writable: true,
//   enumerable: true,
//   configurable: false,
// });
// user.password = "changed One";
// delete user.password;
// console.log(Object.keys(user));
// console.log(user.password);

// let user = { name: "Rohit", username: "hitman" };
// // Object.freeze(user);
// Object.seal(user);
// user.username = "New name";
// delete user.username;
// // user.password = "1234";
// console.log(user);

// let animal = { eat: "It eats food" };

// let dog = Object.create(animal);
// dog.bark = "It barks";
// dog.eat = "It eats dog food";
// // console.log(animal.bark);
// console.log(dog.eat);

// console.log(Object.getPrototypeOf(dog));

// let jsonstr = '{"name": "Rohit", "age": 30}';
// console.log(jsonstr.name);
// let obj = JSON.parse(jsonstr);
// console.log(obj.name);
// let userdata = { name: "", email: "", password: "" };
// userdata.name = "Rohit";
// userdata.email = "rohit@example.com";
// userdata.password = "1234";

// let userdata = {
//   name: "",
//   email: "",
//   password: "",
//   //   greet: function() {
//   //     console.log("This is a function");
//   //   },
//   //   x: undefined,
//   citydetails: {
//     city: "Delhi",
//     country: "India",
//   },
// };

// userdata.self = userdata;

// Object.defineProperty(userdata, "id", {
//   value: "1",
//   writable: true,
//   enumerable: false,
//   configurable: true,
// });

// console.log(JSON.stringify(userdata));

// let el = document.getElementById("title");

// console.log(el);

// let el1 = document.getElementsByClassName("desc");

// console.log(el1);

// let el2 = document.getElementsByTagName("p");

// console.log(el2);

// let el3 = document.querySelector(".desc");
// // el3.innerHTML = "<h1>This is strong</h1>";
// el3.textContent = "descriptive module 1"
// console.log(el3);
// el3.setAttribute("class", "description");
// console.log(el3);
// el3.removeAttribute("id");
// console.log(el3);
// el3.className = "description";
// console.log(el3);
// el3.style.border = "1px solid red";
// el3.style.backgroundColor = "yellow";

// let el = document.createElement("div");
// el.setAttribute("class", "box");
// el.textContent = "This is a box";
// document.body.appendChild(el);
// el.style.backgroundColor = "yellow";

// el3.remove();
// console.log(el3);

// let btn = document.getElementById("clickmeBtn");
// btn.addEventListener("click", function (s) {
//   console.log("Button clicked", s.stopPropagation());
// });

// let frag = document.createDocumentFragment();

// for (let i = 0; i < 1000; i++) {
//   let el = document.createElement("div");
//   el.setAttribute("class", "box");
//   el.textContent = "This is a box";
//   frag.appendChild(el);
// }

// document.body.appendChild(frag);

// task1
function fetchData() {
  //   let start = Date.now();
  //   while (Date.now() - start < 5000) {
  //     // Simulating a long-running task
  //   }
  setTimeout(() => {
    console.log("1. data fetched");
  }, 5000);
}

fetchData();

// task2
console.log("2. ready to execute");
let data =  fetch();
