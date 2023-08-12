import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUDUI';
  floor:number=0;
  totalFloors:number[] = []
  createFloors(e:any){
    this.totalFloors=[]
    this.floor=Number(e.value);
    console.log(typeof e.value);
    for (let i=1;i<this.floor+1;i++){
      this.totalFloors.push(i);
      // console.log(this.totalFloors)
    }
  }
}
