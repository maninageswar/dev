import { Component, OnInit } from '@angular/core';
import {createOutput} from "@angular/compiler/src/core";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  showError:boolean=false
  ErrorMsg:string=""
  constructor() { }

  ngOnInit(): void {
  }

  show(fc:any){
    console.log(fc)
    console.log("hello")
    console.log(typeof fc.errors)
    if (fc.errors.required !== null){
      this.showError=true
      this.ErrorMsg="user name is mandatory"
    }
    if (fc.errors.minlength.actualLength<5){
      this.showError=true
      this.ErrorMsg="user name must contains more than 5 charecters"
    }
  }

  showFirstName(fname){
    if (fname.errors){
      console.log("hekkko")
    }
  }

  form  ={

    fname: "",

    lname: "",

    pan: "",

    mobile: "",

    email: "",

    age: null

  }

  integreRegex = /^\d+$/

  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

  title = 'template-driven-form';



  registerFn(){

    console.log(this.form)

  }

}

//you have to provide the username
