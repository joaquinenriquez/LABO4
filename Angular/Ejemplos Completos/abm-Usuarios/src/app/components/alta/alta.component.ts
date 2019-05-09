import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IEntidad } from 'src/app/models/ientidad.model';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  cargadoCorrecto: boolean;
  unaEntidad: IEntidad;

  @Input() formData: any = [];
  @Output() Agregado = new EventEmitter();

  userForm = new FormGroup({
    id: new FormControl(''),
    campo1: new FormControl(''),
    campo2: new FormControl(''),
    campo3: new FormControl('')
  });

  onSubmit() {
    this.unaEntidad = this.userForm.value;
    this.unaEntidad.id = 32;

    this.miUsuarioService.CargarUno(this.unaEntidad)
      .then(
        response => {
          console.log(response);
          this.cargadoCorrecto = true;
          this.userForm.reset();
          this.Agregado.emit(this.unaEntidad);
          console.log(response);
        }
      )
      .catch(
        error => {
          this.cargadoCorrecto = false;
          console.error(error);
        }
      );

    console.log(this.userForm.value);

  }

  constructor(private miUsuarioService: UsuarioService) { }



  ngOnInit() {

  }


}
