import { Component, OnInit } from '@angular/core';
import { VisitsService } from 'src/app/services/visits.service';
import { Proyect } from './interfaces/proyectos';
import { ProyectosService } from './services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyect[] = [];

  constructor(private proyectosService: ProyectosService,
    private visitsService:VisitsService) { }

    

    ngOnInit() {
      this.proyectosService.getProyectos().subscribe(
        (data) => {
          this.proyectos = data;
        },
        (error) => {
          console.error('Error al cargar los proyectos:', error);
        }
      );
    }

}
