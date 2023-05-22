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

// ******************************************** to take user input ********************************************
// food=prompt("enter food")
// const prompt = require('prompt-sync')({sigint: true}) // this line should be included in vs code
// n1=Number(prompt("n1"))
// n2=Number(prompt("n2"))
// console.log(n1+n2)

// ******************************************** to declare function in an object ********************************************

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

// const findsum=(arr)=>{
// let r=0
// for (const i of arr){
//     r+=i
// }
// return {result:r}
// }
// const ar=[1,5,2,6,7,9,8,7,6,5,4,6,6677,7,8,65,4,6,7,888676677,5555]
// console.log(findsum(ar))

// ******************************************** to find the frequency of characters in a sentence ********************************************

// let sen = "hello hi there i am a awaste fellow";
// const FindLetterFrequency = (sentence) => {
//   obj = {};
//   for (const i of sentence) {
//     if (i !== ' ') {
//       if (i in obj) {
//         obj[i] += 1;
//       } else {
//         obj[i] = 1;
//       }
//     }
//   }
//   return obj;
// };

// console.log(FindLetterFrequency(sen));
// let n = "a a a a lol lol there ".split(" ");
// let h=n[7]
// k=typeof h
// console.log(n)
// console.log(h)
// console.log(k)

// ******************************************** higher order functions(very important) ********************************************

// map
// let result = [1,2,3,4,5].map(number => number*2)
// console.log(result)

// filter
// let r=[1,2,3,4,5].filter(num=>num>3)
// console.log(r)

// const actors=[{name:"jonnay",networth:10000000000},
//               {name:"Amber",networth:1000},
//               {name:"ronaldo",networth:10000000000000000}]
// console.log(actors.filter(actor=>actor.networth>1000))

// to give and condition in if we use &&
// to give or condition in if we use ||

// reduce
// reduce can be best explained with an operation sum of an array
// const nums=[1,2,3,4,5]
// result = nums.reduce(function add (a,b){
//     return a+b
// })
// console.log(result)
// result=nums.reduce((a,b)=>a+b) // shortest form to above
// console.log(result)

const actors = [
  { name: "jonnay", networth: 10000000000 },
  { name: "Amber", networth: 1000 },
  { name: "ronaldo", networth: 10000000000000000 },
];

// sum_of_networths_of_aactors=actors.map(a=>a.networth).reduce((a,b)=>a+b)
// console.log(sum_of_networths_of_aactors)
// console.log(actors.map(z=>z.name).reduce((a,b)=>a+" "+b)) //-->jonnay Amber ronaldo
// console.log(actors.map(z=>z.name)) //-->[ 'jonnay', 'Amber', 'ronaldo' ]
// console.log(actors.filter(z=>z.name)) //--> [{ name: "jonnay", networth: 10000000000 },{ name: "Amber", networth: 1000 },{ name: "ronaldo", networth: 10000000000000000 },]
// console.log(actors.reduce(z=>z.name)) //--> undefined


// ******************************************** understanding the difference between map reduce filter ********************************************

// k = [1, 2, 3, 4, 5, 6, 7];
// console.log(k.map((a) => a > 5)); //--> [false, false, false, false, false, true,true]
// console.log(k.map((a) => a + 5));; //--> [(6, 7, 8, 9, 10, 11, 12)]
// console.log(k.filter((a) => a > 5)); //--> [ 6, 7 ]
// console.log(k.filter((a) => a + 5)); //--> [1, 2, 3, 4, 5, 6, 7]
// o=k.filter((a) => a > 4).map((b) => b + "#######"); //-->[ '5#######', '6#######', '7#######' ]
// console.log(o)
// console.log(o.reduce((a,b)=>a+b)) //--> 5#######6#######7#######


// k = [13, 24, 35, 44, 58, 65, 79]
// k = [13, 24, 35, 44, 58, 65, 79]
// console.log(k.map(x=>x%2))
