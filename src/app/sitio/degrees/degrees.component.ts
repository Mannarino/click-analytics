import { Component, OnInit } from '@angular/core';
import { cursos,carreras } from '../../core/data';
import { VisitsService } from '../../services/visits.service';




@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.css']
})
export class DegreesComponent implements OnInit {
  carreras = carreras
  cursos = cursos
  constructor(private visitsService:VisitsService) { }

  ngOnInit(): void {
  }
  marcarClick(click){
    this.visitsService.registrarClick(click)
  }
}
