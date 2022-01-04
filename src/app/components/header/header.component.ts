import { Component, OnInit } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faLink, faPen } from '@fortawesome/free-solid-svg-icons';

import { PortfolioService } from 'src/app/services/portfolio.service';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  profileIcon = faUser;
  linkedinIcon = faLink;
  editIcon = faPen;

  miPortfolio:any;

  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });
  }

}
