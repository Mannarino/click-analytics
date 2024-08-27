import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  loginUser(form){
    return this.http.post(`${environment.url_endpoint}/login`,form, { withCredentials: true })
  }
}
