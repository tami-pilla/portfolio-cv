import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators} from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  deleteIcon = faTimes;
  username:string = '';
  email:string ='';
  password:any = '';

  form: FormGroup;

  constructor(private authentic:AuthService, private formBuilder: FormBuilder) { 

    this.form = this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.min(8)]]
    })
  }


  Login() {
     //El servicio authentic.login va a direccionar si el inicio de sesion es positivo
    this.authentic.login(this.username, this.password)
  }



  ngOnInit(): void {
  }

}
