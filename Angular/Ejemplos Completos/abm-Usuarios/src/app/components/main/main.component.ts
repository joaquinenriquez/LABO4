import { Component, OnInit, ViewChild } from '@angular/core';
import { GrillaComponent } from '../grilla/grilla.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('grilla') private grilla: GrillaComponent; 

  constructor() { }

  ngOnInit() {
  }

  agregar(event) {
    this.grilla.cargarLista();
  } 
  
}
