import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IEntidad } from 'src/app/models/ientidad.model';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  /* #region  Atributos */

  listadoEntidades: IEntidad[];
  listadoEntidades$: Observable<IEntidad[]>

  /* #endregion */

  constructor(private servicioUsuarios: UsuarioService) { }

  ngOnInit() {
    //this.cargarLista();
    this.cargrLista2();
  }

  public cargarLista() {
    this.servicioUsuarios.TraerTodos().subscribe(
      datos => {
        console.log(datos);
        this.listadoEntidades = datos;
      },
      error => {
        console.log(error);
      });
  }

  public cargrLista2(){
    this.listadoEntidades$ = this.servicioUsuarios.TraerTodos();
    this.listadoEntidades$.subscribe(entidades => this.listadoEntidades = entidades);
  }
}
