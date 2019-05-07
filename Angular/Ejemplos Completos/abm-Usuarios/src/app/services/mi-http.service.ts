import { Injectable } from '@angular/core';

// 1. Creamos el servicio ng s services/miHTTP
// 2. Importamos HttpClient
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MiHTTPService {

  constructor(private http: HttpClient) { }

  public getObservable(url: string) {
    return this.http.get(url);
  }

}
