import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-crash-todolist';

  constructor(){
    // console.log(123);
    this.changeTitle("Rose");
  }

  changeTitle(title:string):void {
this.title = title;
  }
}
