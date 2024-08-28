import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interfaces/general-info-visit';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  loginUser(form: any) {
    return this.http.post<LoginResponse>(`${environment.url_endpoint}/login`, form)
      .pipe(
        tap((response: LoginResponse) => {
          // Guardar el token en localStorage o sessionStorage
          localStorage.setItem('authToken', response.token);
        })
      );
  }
}
