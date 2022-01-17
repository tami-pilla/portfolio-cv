import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';

import { trigger, style, transition, animate, state } from '@angular/animations';

import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],

  //ANIMACION
  //Las animaciones son una serie de transiciones entre estados/states. La funcion trigger() recibe por parametros su nombre scrollAnimation,
  // los estados por los que va a pasar la animacion  'normal' y 'scrolled' y dentro sus estiles correspondientes.
  // Luego se indica desde que estado a que estado se realiza la transicion y la duracion de la animacion. 

  animations: [
    trigger('scrollAnimation', [
      state('normal', style({
        transform: 'translateY(-180%)',
        opacity: 0
      })),
      state('scrolled', style({
        transform: 'translateY(0)',
        opacity: 1,

      })),
      transition('normal => scrolled', animate('1s ease-in'))
    ])
  ]

})

export class AboutComponent implements OnInit {

  miPortfolio: any;

  deleteIcon = faTimes;
  editIcon = faPen;

  state = 'normal'


  constructor(public datosPortfolio: PortfolioService, public el: ElementRef) { }



  //ANIMACION
  //El HostListener va a capturar el evento window:scroll que es cuando se le hace scroll a la pagina. Despues va a obtener la posicionn del elemento que queremos que cambie (ElementRef) y obtenemos la posicion en Y de la ventana ( offsetTop retorna la distancia del elemento actual respecto al borde superior del offsetParent. Distancia del elemento al top de la pantalla/elemento paddre)
  //si el scroll Y de la ventana es mayor a la posicion del elemento se cambia el state a ‘scrolled’ si no se queda 'normal'.

  @HostListener('window:scroll', ['$event'])

  comprobarScroll(): any {
    const elementoPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    const scrollNum = scrollY > 500

    if (elementoPosition > scrollNum) {
     this.state = 'scrolled';
    }

  }





  ngOnInit(): void {

    //Nos suscribumos al metodo Observable obtenerDatos()
    //Se le indica con una funcion de flecha que cuando tenga la data, esta se almacene en la variable miPorfolio (declarada mas arriba)
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });
  }



}
