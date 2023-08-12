import { Component } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PGFORM';
  integerRegex= /^\d+$/
  emailRegex='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'


  pgform = new FormGroup({
    owner_details: new FormGroup({
      name: new FormControl(null, [Validators.maxLength(20),Validators.minLength(5), Validators.required]),
      phone: new FormControl(null, [Validators.maxLength(10),Validators.minLength(10), Validators.required, Validators.pattern(this.integerRegex)]),
      email: new FormControl(null, [Validators.pattern(this.emailRegex)]),
    }),

    pg_details: new FormGroup({
      pg_name: new FormControl(null, [Validators.maxLength(20),Validators.minLength(5), Validators.required]),
      pg_location: new FormControl(null, [Validators.required]),
      pg_type: new FormControl(null, [Validators.required]),
      pg_room_type: new FormControl(null, [Validators.required]),
      pg_deposite: new FormControl(null, [Validators.required, Validators.pattern(this.integerRegex)]),


    })

  })

  showForm(){
    console.log(this.pgform)
    // console.log(this.pgform.value)
  }

}
