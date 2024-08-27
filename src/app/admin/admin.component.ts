import { Component, OnInit } from '@angular/core';
import { VisitsService } from '../services/visits.service';
import { SessionData,  SessionResponse,UserData ,ClickData} from '../interfaces/general-info-visit';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  sessionData: SessionData | null = null;
  constructor(private visitsService:VisitsService) { }

  ngOnInit(): void {
    this.obtener()
  }

  obtener(){
    this.visitsService.getSessionInfo().subscribe(response => {
      if (response.success) {
        this.sessionData = response.data;
      } else {
        console.log('No se encontraron datos de la sesión.');
      }
    });
  }
}
