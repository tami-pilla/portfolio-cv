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


  ngOnInit(): void {
  }
}
