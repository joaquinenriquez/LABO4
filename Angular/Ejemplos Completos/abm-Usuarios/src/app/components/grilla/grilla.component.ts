import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IEntidad } from 'src/app/models/ientidad.model';


@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  /* #region  Atributos */

  listadoEntidades: IEntidad[];

  /* #endregion */

  constructor(private servicioUsuarios: UsuarioService) { }

  ngOnInit() {
    this.cargarLista();
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

}
