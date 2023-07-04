import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AONE';
  variable_in_parent_component="PARENT"
  p_names=['sai','kumar','naveen']
  p_movie="Fast-x"
  p_component_input=""

  dateFromChildComponent=''
  receiveMessage(msg:any){
    this.dateFromChildComponent=msg
  }
}
