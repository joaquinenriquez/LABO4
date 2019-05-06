import { Component, OnInit } from '@angular/core';

import { IUsuario } from 'src/app/models/iusuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  /* #region  Atributos */

  usuarios: IUsuario;

  /* #endregion */

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json()).suscribe
    (data => this.usuarios = data as IUsuario);
  }

}
