import { Component, OnInit } from '@angular/core';
import { VisitsService } from '../services/visits.service';
import { User, UserWithClicks} from '../interfaces/general-info-visit';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  sessionData: User[] = []
  constructor(private visitsService:VisitsService) { }

  ngOnInit(): void {
    this.obtener()
  }

  obtener(){
    this.visitsService.getUsuarios()
    .subscribe(response => {
      console.log(response)
      this.sessionData= response;
    });
  }
}
