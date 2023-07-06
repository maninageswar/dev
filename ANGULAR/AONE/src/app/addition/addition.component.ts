import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {

  constructor(private sharedservice:SharedService){

  }

  result=0

  Calculate(num1:any,num2:any){
    this.result=this.sharedservice.calculate(Number(num1.value),Number(num2.value),'add')
  }

}
