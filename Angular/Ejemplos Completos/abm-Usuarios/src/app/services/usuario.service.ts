import { Injectable, OnInit } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { IEntidad } from '../models/ientidad.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService implements OnInit  {

  private listadoEntidades$ = new Subject<IEntidad[]>();

  constructor(private http: HttpBaseService) { }

  ngOnInit(): void {}

  public TraerTodos(): Observable<IEntidad[]> {
    return this.http.httpGetO<IEntidad[]>('/entidadGrupoRuta/');
  }

  public CargarUno(unaEntidad: IEntidad): Promise<Object> {
    
    return this.http.httpPostP('/entidadGrupoRuta/', unaEntidad);
  }

  //public CargarUno(unaEntidad: IEntidad): Observable<IEntidad> {
    //return this.http.http.post<IEntidad>('http://localhost/api/miApi/index.php/entidadGrupoRuta/', unaEntidad);
  //}



}
