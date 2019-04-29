import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../../cliente.service';
import { Cliente } from '../../cliente.model';
import { Grupo } from '../../grupo.model';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  constructor(private clientesService: ClienteService) { }

  ngOnInit() {
  }

}
