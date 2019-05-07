import { Injectable, OnInit } from '@angular/core';
import { MiHTTPService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements OnInit  {

  usuarios: any = [];
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: MiHTTPService) { }

  ngOnInit(): void {
    this.getUsuarios();
    console.log('sdadsadas');
  }

  getUsuarios() {
    this.http.getObservable(this.url)
    .subscribe((data: any) => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }



}
