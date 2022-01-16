import { Component, OnInit } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';

import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  miPortfolio: any;

  deleteIcon = faTimes;
  editIcon = faPen;


  constructor(public datosPortfolio: PortfolioService) { }

  tituloAnimacionScroll = document.getElementById("animacion-titulo")

  animacionTitulo() {

    // window.scroll(this.tituloAnimacionScroll.style.opacity = 1, window.scrollY > 300);

    //  window.scroll(this.tituloAnimacionScroll.classList.add(
    //  "animacionScroll", window.scrollY > 300);
    //   )

  }



  ngOnInit(): void {

    //Nos suscribumos al metodo Observable obtenerDatos()
    //Se le indica con una funcion de flecha que cuando tenga la data, esta se almacene en la variable miPorfolio (declarada mas arriba)
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });
  }

}
