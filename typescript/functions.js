"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    console.log(user.name);
    console.log(user.isPaid);
    console.log(user.email);
}
// function createUser(a:{}){
//     console.log(a)
// }
// let user={name:"mani",isPaid:true,email:"mani@gmail.com"}
createUser({ name: "mani", isPaid: true, email: "mani@gmail.com" });
