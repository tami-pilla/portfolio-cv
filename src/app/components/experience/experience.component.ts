import { Component, OnInit } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';

import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  deleteIcon = faTimes;
  editIcon = faPen;

  miExperiencia: any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {

    //Nos suscribumos al metodo Observable obtenerDatos()
    //Se le indica con una funcion de flecha que cuando tenga la data, esta se almacene en la variable miExperiencia (declarada mas arriba)
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miExperiencia = data.experience;
    })
  }

}
