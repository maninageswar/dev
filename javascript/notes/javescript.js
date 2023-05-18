// taking input from the user

// console.log("i have successfully made the visula studio code run the jave script file");
// const prompt = require('prompt-sync')();
// var fname = prompt("enter first name");
// var lname = prompt("enter last name");
// console.log("your name is ",fname,lname);


// difference between var and let and their scopes in the blocks
// var x=5;
// console.log("outside block the x is ",x)
// {
//     var x=2;
//     console.log("inside block the x is ",x)
// }
// console.log("x out side the block after the console passes the block is ",x)

// let y=5;
// console.log()
// console.log("outside block the y is ",y)
// {
//     let y=2;
//     console.log("inside block the y is ",y)
// }
// console.log("y out side the block after the console passes the block is ",y)

// const cars = ["Saab", "Volvo", "BMW"];

// // You can change an element:
// cars[0] = "Toyota";

// // You can add an element:
// cars.push("Audi");

// console.log(cars[0])


// function foo(){
//     var x=4
//     console.log(x)
// }

// // var x=2
// // console.log(x)
// foo()
// console.log("value of x after function called",x)

// const obj = {name:"sai",age:24}
// console.log(obj["name"])

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

//   console.log(person["fullName()"])
//   console.log(person.fullName())

// very important the difference between declaring variables without "var" and with "var"

// x=2
// s=5
// let d=90
// var y=4
// const e={name:"sai",age:24}
// v={name:"kumar",age:84}
// console.log(x)
// console.log(y)
// console.log(globalThis)


// for loop

// var x
// for (let index = 0; index < 10; index++) {
//     x=x+"super"
// }
// console.log(x)

// difference between x==y and x===y
// var x=1
// var y="1"
//  if (x==y && x===y) {
//     console.log("they are equal in state and also equal in type")
// }
// else if (x==y || x===y) {
//     console.log("they are equal in state and also equal in type")
// }
// else {
//     console.log("they are equal in state but not in type")    
// }

// function Replace (){
//     let text=document.getElementById("para").innerHTML
//     document.getElementById("para").innerHTML=text.replace(/Microsoft/g , "w3 schools")
// }

// let a="sai"
// let b="ram"
// // let text = "The first name is "+a+" the last name is "+b

// console.log("the first name is ",a," and the last name is ",b)

// let firstName = "John";
// let lastName = "Doe";

// let text = `Welcome ${firstName}, ${lastName}!`;

// console.log(text)

// let x=10n
// let y=Number(x)/2
// console.log(y)

// how to use html in script

// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Template Literals</h2>

// <p>Template literals allows variables in strings:</p>

// <p id="demo"></p>

// <p>Template literals are not supported in Internet Explorer.</p>

// <script>
// let header = "Templates Literals";
// let tags = ["template literals", "javascript", "es6"];

// let html = "<h2>"+header+"</h2><ul>";

// for (const x of tags) {
// html+="<li>"+x+"</li>"
// }
// html+="</ul>"


// document.getElementById("demo").innerHTML = html;
// </script>

// </body>
// </html>

// let y=9.656

// let x=y.toFixed(2)
// console.log(x)

// const d=new Date().getDay();
// console.log(d)

// const numbers = [45, 4, 9, 16, 25];


// for (let x of numbers) {
//   console.log(x)
// }

// food=prompt("enter food")
// const prompt = require('prompt-sync')({sigint: true})
// n1=Number(prompt("n1"))
// n2=Number(prompt("n2"))
// console.log(n1+n2)

// let name="man"
// console.log("hi "+name+" bhjgvjb")

// const intro = (name,age)=> {
//     const person ={NAME:name,AGE:age,full: function(){return this.NAME+this.AGE}}
//     a=`hi my name is ${person.NAME} and my age is ${person.AGE} full ${person.full()}`
//     return a
// }

// a=intro("sai",24)
// console.log(a)

// const n=[1,2,3,4,5,6]
// for(i=0;i<n.length;i++){
//     n[i]=n[i]*2
// }
// console.log(n)

const arr=[1,5,2,6,7,9,8,7,6,5,4,6,6677,7,8,65,4,6,7,888676677,5555]
// v=Math.min(1,5,2,6,7,9,8,7,6,5,4,6,6677,7,8,65,4,6,7,888676677,5555)
console.log(Math.max.apply(null, arr))
// let r=0
// for (const i of arr){
//     if (i>r) {
//         r=i
//     }
// }
// console.log(r)