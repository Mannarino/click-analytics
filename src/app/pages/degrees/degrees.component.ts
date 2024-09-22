import { Component, OnInit } from '@angular/core';
import { Studies } from 'src/app/interfaces/studies';
import { LanguageService } from 'src/app/services/language.service';
import { VisitsService } from '../../services/visits.service';




@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.css']
})
export class DegreesComponent implements OnInit {
  carreras = []
  cursos = []
  constructor(private visitsService:VisitsService,
              private languageService:LanguageService) { 
              
              }

  ngOnInit(): void {
    this.languageService.getStudies()
          .subscribe((studies)=>{
            this.carreras=studies.carreras
            this.cursos=studies.cursos
          })
                
  }
  marcarClick(click){
    this.visitsService.registrarClick(click)
  }
}
