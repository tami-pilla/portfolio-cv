import { Component, OnInit } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faLink, faPen, faEnvelope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthService } from 'src/app/services/auth.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public datosPortfolio:PortfolioService, private http: HttpClient, private router: Router, public authentic:AuthService) { }

  profileIcon = faUser;
  linkedinIcon = faLink;
  editIcon = faPen;
  mailIcon = faEnvelope;
  logOutIcon = faSignOutAlt;

  miPortfolio:any;

  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });
  }

}
