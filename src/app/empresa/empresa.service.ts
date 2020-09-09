import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from './empresa.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EmpresaService{
  API_URL = 'empresa';

  constructor(http: HttpClient) {

  }

//   getListagemEmpresa(filtro: any) {
//     const url = `${this.getApiUrl()}/empresa`;

//     return this.http.get<Empresa>(url);
//   }


}
