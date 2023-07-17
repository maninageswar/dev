import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  
  mobiles=["apple","samsung"]

  calculate(num1:number,num2:number,operation:string){
    if (operation==='add'){
      console.log('add',num1+num2);
      return num1+num2
    }
    else if (operation==='sub'){
      return num1-num2
    }else{
      return num1*num2
    }
  }
}
