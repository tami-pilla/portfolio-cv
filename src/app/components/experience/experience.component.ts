import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';

import { trigger, style, transition, animate, state } from '@angular/animations';

import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],

  // animations: [
  //   trigger('scrollAnimation', [
  //     state('normal', style({
  //       transform: 'translateY(-200%)',
  //       opacity: 0
  //     })),
  //     state('scrolled', style({
  //       transform: 'translateY(0)',
  //       opacity: 1,

  //     })),
  //     transition('normal => scrolled', animate('1.2s'))
  //   ])
  // ]

})
export class ExperienceComponent implements OnInit {

  deleteIcon = faTimes;
  editIcon = faPen;

  miExperiencia: any;

  state = 'normal';

  constructor(private datosPortfolio: PortfolioService, public el: ElementRef) { }

  // @HostListener('window:scroll', ['$event'])

  // comprobarScroll(): any {
  //   const elementoPosition = this.el.nativeElement.offsetTop
  //   const scrollPosition = window.pageYOffset
  //  const scrollNum = scrollY > 400

  //   if (scrollNum < elementoPosition) {
  //    this.state = 'scrolled';
  //   }

  // }


  ngOnInit(): void {

    //Nos suscribumos al metodo Observable obtenerDatos()
    //Se le indica con una funcion de flecha que cuando tenga la data, esta se almacene en la variable miExperiencia (declarada mas arriba)
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miExperiencia = data.experience;
    })
  }

}
