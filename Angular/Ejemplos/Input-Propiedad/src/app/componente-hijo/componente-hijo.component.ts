// 1. Importamos el decorador Input
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {

  // 2. Creamos una propiedad con el decorador @Input() delante
  @Input() nombreDePropiedadEnElComponenteHijo;

  constructor() { }

  ngOnInit() {
  }

}
