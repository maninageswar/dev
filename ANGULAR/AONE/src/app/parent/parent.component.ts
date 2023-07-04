import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  p_input=""
  c_input=""

  receiveMsg(msg:any){
    this.c_input=msg
  }

}
