import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IpinfoService } from './ipinfo.service';
import { SessionData,  SessionResponse,UserData ,ClickData} from '../interfaces/general-info-visit';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VisitsService {

  constructor(private http:HttpClient, private ipInfoService:IpinfoService) { }

 
  registrarUsuario(){
    this.http.post(`${environment.url_endpoint}/register-user`,this.ipInfoService.datosIfInfo, { withCredentials: true })
     .subscribe((data)=>{console.log(data)})
  }
  prueba(){
    this.http.get(`${environment.url_endpoint}/set-cookie-manual`, { withCredentials: true })
     .subscribe((data)=>{console.log(data)})
  }
  registrarVisita(){
    this.http.get(`${environment.url_endpoint}/`, { withCredentials: true })
     .subscribe((data)=>{ console.log(data)})
  }
  registrarClick(click){
    this.http.post(`${environment.url_endpoint}/clicks`,{click}, { withCredentials: true })
     .subscribe((data)=>{console.log(data)})
  }

  getSessionInfo(): Observable<SessionResponse> {
    return this.http.get<SessionResponse>(`${environment.url_endpoint}/session-info`, { withCredentials: true });
  }
  
}
