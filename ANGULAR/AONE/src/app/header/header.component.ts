import { Component, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  // Variables
  title='string interpollation'
  spec:string="special"
  isdisabled:boolean=true
  isactive:boolean=false
  class1:boolean=true
  class2:boolean=true
  batman_color:string="lightcoral"
  batman_bg_color:string="fuchsia"
  act:string="active"
  inact:string="inactive"
  grey="grey"
  ant_man_styles:object={
    color:'grey',
    background:'greenyellow',
    border: '2px solid red'
  }
  city:string="Bengaluru"
  show:String=""

  movies:string[]=["Transformers","Fast X","John Wick"]

  d:string=new Date().toLocaleTimeString()
  timeid=setInterval(()=>{
    this.d=new Date().toLocaleTimeString()
  },1000)
  
  // Functions
  test(x:number){
    return x+5
  }

  Counter_value:number=0
  Change_Counter(a:Event){
    if ((a.target as HTMLButtonElement).innerText==="increaseCounter") {
      this.Counter_value+=1
    } else {
      this.Counter_value-=1
    }
  }

  input_Value:string=""
  keyUp(a:any){
    this.input_Value=a.target.value
    console.log(a);
    console.log(a.target);
    console.log(a.target.value);
  }

  ngIfClick(){
    this.show="man"
  }

  names=""
  time=setTimeout(()=>{
    this.names="23"
  },6000)

  op=''
  n1=10
  n2=4

  // Practice
  inputValue=""
  isDisabled=false
  CheckForm(){
    if (this.inputValue==="Submitted"){
      this.isDisabled=true
    }
  }

  luclyNumber=0
  color=""
  ChangeTextColor(c:string){
    this.color=c
  }

  result=""
  SetResult(a:string){
    if (a==='Approve'){
      // this.result='Your Application has been approved'
      this.result=a
    }
    else{
      // this.result="Sorry Your Application has been Rejected"
      this.result=a
    }
  }

  numbers=["one","two","three","four","five","six","seven","eight","nine","ten"]

  toggle=false
  ChnageToggle(){
    this.toggle=!this.toggle
  }

  @ViewChildren('num') num:any;

  isClear:boolean=true
  Highlight(n:number){
    // remember in forEach if you are iterating through an object you have to give the element in () like forEach((element:any) => {}
    // console.log(typeof this.num._results);//====>object
    this.num._results.forEach((element:any) => {
      if (n===1){
        element.nativeElement.className="d_number"
      }
      else{
      this.isClear=false
      element.nativeElement.className="d_number"
      if (Number(element.nativeElement.innerText)%n===0){
        // console.log(element.nativeElement.innerText);
        element.nativeElement.className+=" c8"
      }}
    });
  }

}
