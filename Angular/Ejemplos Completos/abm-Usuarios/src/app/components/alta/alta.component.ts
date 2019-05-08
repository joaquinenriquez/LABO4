import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private miUsuarioService: UsuarioService) { }



  ngOnInit() {
    this.traerDatos();
  }

  public traerDatos() {
    this.miUsuarioService
    .getUsuarios
  }

}
