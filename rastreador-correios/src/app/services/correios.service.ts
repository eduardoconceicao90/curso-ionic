import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorreiosService {

  constructor(private http: HttpClient) { }

  localizarObjeto(codigoObjeto: string) {
    let url = 'https://proxyapp.correios.com.br/v1/sro-rastro/' + codigoObjeto;
    var header: any = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }
    return this.http.get(url, header).toPromise();
  }

}
