type User={
    readonly _id:string,
    name:string,
    isPaid:boolean,
    credCard?:number
}

let k:User={
   _id:"1234",
   name:"mani",
   isPaid:false 
}

k.name="sai"
// k._id="234"
console.log(k)

export {}