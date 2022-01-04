import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

import { Observable } from 'rxjs'; //futuros eventos a los que nos subscribimos y luegos nos llegaran de forma asincronica. 


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }


  obtenerDatos():Observable<any> {
    return this.http.get('./assets/data/data.json')
  }
  
}

