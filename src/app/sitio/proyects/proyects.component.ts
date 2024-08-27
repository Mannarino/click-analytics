import { Component, OnInit } from '@angular/core';
import { IdiomaService } from '../../services/idioma.service';
import { VisitsService } from '../../services/visits.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  fullstack=false
  animaciones=false
  javascript=false
  maquetacion=false
  mensajeEleccion = true
  idioma = 'spanish'
  arrayFullstack=[
    {imagen:'./assets/fullstack/almacen.jpg',nombre:'almacen',url:'https://api-rest-full-del-almacen.onrender.com/home'},
    {imagen:'./assets/fullstack/andromeda.jpg',nombre:'andromeda',url:'https://wondrous-tartufo-bf4b69.netlify.app/'},
    {imagen:'./assets/fullstack/chat.jpg',nombre:'chat',url:'https://64a0aea5de745172697c6e2c--vermillion-khapse-c87f23.netlify.app/'}
  ]
  arrayJavascript=[
    {imagen:'./assets/javascript/incognita.jpg',nombre:'incognita',url:'https://mannarino.github.io/juego-javascript/'},
    {imagen:'./assets/javascript/nodos.jpg',nombre:'nodos',url:'https://mannarino.github.io/proyecto-dom-nodos/'},
    {imagen:'./assets/javascript/comunicacion.jpg',nombre:'comunicacion',url:'https://mannarino.github.io/comunicacion-con-el-servidor/'},
    {imagen:'./assets/javascript/jerarquia.jpg',nombre:'jerarquia',url:'https://mannarino.github.io/jerarquia-of-objects/'},
    {imagen:'./assets/javascript/localstorage.jpg',nombre:'localstorage',url:'https://mannarino.github.io/aplicacion-localstorage/'},
    {imagen:'./assets/javascript/simpson.jpg',nombre:'simpson',url:'https://mannarino.github.io/arraySimpson/'}
  ]
  arrayMaquetacion=[
    {imagen:'./assets/maquetacion/uno.jpg',nombre:'uno',url:'https://mannarino.github.io/sitioResponsive2/'},
    {imagen:'./assets/maquetacion/dos.jpg',nombre:'dos',url:'https://mannarino.github.io/foundation-web/'},
    {imagen:'./assets/maquetacion/tres.jpg',nombre:'tres',url:'http://mannarino.github.io/SitioResponsive/'}
  ]
  arrayAnimaciones=[
    {imagen:'./assets/animaciones/uno.jpg',nombre:'uno',url:'https://mannarino.github.io/animacionescss/'},
    {imagen:'./assets/animaciones/dos.jpg',nombre:'dos',url:'https://mannarino.github.io/animacioneshover/'},
    {imagen:'./assets/animaciones/tres.jpg',nombre:'tres',url:'https://mannarino.github.io/ejercicio-transiciones-responsivas/'}
  ]
  
  constructor(private idiomaService:IdiomaService,
              private visitsService:VisitsService) { }

  ngOnInit(): void {
    this.idioma = localStorage.getItem('idioma')
    if (!this.idioma) {
      this.idioma = 'spanish';
    }
    this.idiomaService.idioma$.subscribe( idioma =>{
      this.idioma = idioma
    })
  }
  cambiarVista(item){
    
    let opcion = item
    switch (opcion) {
      case "fullstack":
        this.fullstack=true
        this.animaciones=false
        this.javascript=false
        this.maquetacion=false
        this.mensajeEleccion = false
        break;
      case "animaciones":
        this.fullstack=false
        this.animaciones=true
        this.javascript=false
        this.maquetacion=false
        this.mensajeEleccion = false
        break;
      case "javascript":
        this.fullstack=false
        this.animaciones=false
        this.javascript=true
        this.maquetacion=false
        this.mensajeEleccion = false
        break;
      case "maquetacion":
        this.fullstack=false
        this.animaciones=false
        this.javascript=false
        this.maquetacion=true
        this.mensajeEleccion = false
        break;
      default:
        console.log("Opción no válida.");
        break;
    }
  }
  marcarClick(click){
    this.visitsService.registrarClick(click)
  }
}
