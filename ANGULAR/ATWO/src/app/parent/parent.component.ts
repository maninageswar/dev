import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  p_input=""
  p_output=""
  receiveMsg(msg:string){
    this.p_output=msg
  }
}
