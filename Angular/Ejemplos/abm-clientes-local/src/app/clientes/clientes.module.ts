import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteService } from './../cliente.service';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';


@NgModule({
  declarations: [AltaClienteComponent],
  imports: [
    CommonModule
  ],

  providers: [
    ClienteService
  ]

})
export class ClientesModule { }
