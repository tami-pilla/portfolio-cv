import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactIcon = faUser;
  mailIcon = faEnvelope;
  locationIcon = faMapMarker;


  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre:['',[]],
      email:['', []],
      mensaje:['',[]]
    })
   }

   onEnviar(event: Event) {
     //Se detiene la ejecucion o propagacion del comportamiento del boton submit
     event.preventDefault;

     if (this.form.valid) {
       // Se llama al servicio para enviar los datos al servidor
     }else {
       // Se corren las validaciones para que aparezcan mesnajes de error en el template
       this.form.markAllAsTouched();
     }

    }


  ngOnInit(): void {
  }
}
