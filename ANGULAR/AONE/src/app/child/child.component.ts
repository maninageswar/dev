import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() c_output:string=""

  @Output() sendEmitter =new EventEmitter()
  sendData(e:any){
    this.sendEmitter.emit(e.target.value)
  }
}
