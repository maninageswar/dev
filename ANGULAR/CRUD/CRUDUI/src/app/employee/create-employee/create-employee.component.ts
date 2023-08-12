import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @Input() variable: string;

  constructor() {
    console.log('in constructor');
    this.variable = 'crud changed';
  }

  ngOnInit(): void {
    console.log('in oninit');
    // this.variable = 'crud changed';
  }

}
