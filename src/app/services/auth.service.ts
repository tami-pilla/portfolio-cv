import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

//en esta clase se escribe todo el codigo que interactua con el servidor
//URL de la API REST y el token de firma
export class AuthService {

  url = 'http://localhost:4200/api';

  token: any;

  constructor(private http: HttpClient, private router: Router) { }


  login(username: string, password: any) {
    this.http.post(this.url + '/authenticate', { username: username, password: password })
             .subscribe((resp: any) => {
             //Redireccionar al usuario a su perfil
               this.router.navigate(['profile']);
             //Guardar el token en el localStorage
            localStorage.setItem('auth_token', resp.token);
      })
  };
}


//Para cerrar sesion se elimina el token del local Storage
 //logOut(){
   //localStorage.removeItem('token');
 //}


//Un servicio para verificar q si existe la sesion. devuelve una propiedad booleana que determina si un usuario está autenticado
 //public get logIn(): boolean {
  // return
  // (localStorage.getItem('token') !== null);
 //}

//}




