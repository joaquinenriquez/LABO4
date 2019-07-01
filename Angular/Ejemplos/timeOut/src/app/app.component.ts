import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timeOut';


  prueba(){
    setTimeout(function prueba2 () {alert('asd');}, 5000);
  }



}

