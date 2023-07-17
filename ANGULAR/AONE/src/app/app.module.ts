import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { DivisibilityComponent } from './divisibility/divisibility.component';
import { RNISPipe } from './rnis.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedService } from './shared.service';
import { CoursesComponent } from './courses/courses.component';

const routes:Routes=[
  {path:'',component:NotfoundComponent},
  {path:'add',component:AdditionComponent},
  {path:'sub',component:SubtractionComponent},
  {path:'mul',component:MultiplicationComponent},
  {path:'courses',outlet:'rout1',component:CoursesComponent},
  // {path:'**',component:NotfoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DivisibilityComponent,
    RNISPipe,
    ParentComponent,
    ChildComponent,
    AdditionComponent,
    SubtractionComponent,
    MultiplicationComponent,
    NotfoundComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
