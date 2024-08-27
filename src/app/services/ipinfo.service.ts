import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { ipInfoVisit } from '../interfaces/general-info-visit';
@Injectable({
  providedIn: 'root'
})
export class IpinfoService {
  datosIfInfo = {
    country:'',
    city:'',
    region:''
  }
  constructor(private http:HttpClient) { }
  //como funciona ipinfo
  //hago un request desde mi cliente a la url ipfino y esta retorna ciertos datos del usuario segun la ip
  getIPINFO(){
     this.http.get(environment.url_ipinfo)
     .subscribe((data:ipInfoVisit)=>{
      this.datosIfInfo.city=data.city,
      this.datosIfInfo.country=data.country,
      this.datosIfInfo.region=data.region
     
     })
  }
  registrarUsuario(){
    this.http.post(`${environment.url_endpoint}/register-user`,this.datosIfInfo, { withCredentials: true })
     .subscribe((data)=>{
      
     })
  }
  
}
