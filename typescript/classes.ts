class Manager{
    constructor(
        public name:string,
        public age:number,
        public locatioin:string,
        protected password?:string
    ){}
    
    getEmDetails(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.locatioin)
    }

    conca():string{
        let y=this.name+this.locatioin
        return  y
    }
}

let E1=new Manager("sai",23,"saklespur")
let E3=new Manager("man",24,"anikman")

console.log(E1.conca())
console.log(E3.conca())


class Employee extends Manager{
    constructor(
        name:string,
        age:number,
        locatioin:string,
        password:string
    ){
        super(name,age,locatioin,password)
    }

    getPass(){
        console.log(this.password)
    }
}
let E2=new Employee("kumar",34,"amalauram","pass@123")

E2.getEmDetails()
E2.getPass()