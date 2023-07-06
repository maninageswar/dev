import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent {
  constructor(private sharedservice:SharedService){

  }

  result=0

  Calculate(num1:any,num2:any){
    this.result=this.sharedservice.calculate(Number(num1.value),Number(num2.value),'mul')
  }
}
