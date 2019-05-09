import { Injectable, OnInit } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { IEntidad } from '../models/ientidad.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService implements OnInit  {

  constructor(private http: HttpBaseService) { }

  ngOnInit(): void {}

  public TraerTodos(): Observable<IEntidad[]> {
    return this.http.httpGetO<IEntidad[]>('/entidadGrupoRuta/');
  }

  public CargarUno(unaEntidad: IEntidad): Promise<Object> {
    return this.http.httpPostP('/entidadGrupoRuta/', unaEntidad);
  }

}
