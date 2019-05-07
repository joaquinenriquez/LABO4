import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  constructor(private servicioUsuarios: UsuarioService) { }

  ngOnInit() {
    this.servicioUsuarios.getUsuarios();
  }

}
