import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task2';
  count=0;
  m1="Increment";
  m3="Decrement";
  m2="Reset"
  fun1(event:any){
       this.count=event; 
  }
  fun2(event:any){
    this.count=event;
  }
  fun3(event:any){
    this.count=event;
  }
}
