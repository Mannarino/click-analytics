import { Component, OnInit } from '@angular/core';
import { VisitsService } from './services/visits.service';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.visitaService.checkUserId()
    
  }
  constructor(private visitaService:VisitsService){}
  
 limpiarLocalstorage(){
  this.visitaService.limpiarLocalstorage()
 }
}
