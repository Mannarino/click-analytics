import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

import { Observable, throwError } from 'rxjs';
import { User } from '../interfaces/general-info-visit';

@Injectable({
  providedIn: 'root'
})
export class VisitsService {

  constructor(private http:HttpClient) { }

  checkUserId() {
    let userId = localStorage.getItem('userId');
    console.log('llamado el check de user')
    console.log(userId)
    if (!userId) {
      console.log('no entra llamado el check de user')
      userId = uuidv4(); // Genera un nuevo UUID
      localStorage.setItem('userId', userId);
      this.registerUser(userId);
    } else {
      console.log('El userId ya existe:', userId);
    }
  }
  limpiarLocalstorage(){
    localStorage.removeItem('userId')
  }
  registerUser(userId){
    this.http.post(`${environment.url_endpoint}/clicks/registeruser`,{ userId }
    )
    .subscribe(
      (data) => { 
        console.log(data);
      },
      (error) => {
        console.error('Error al registrar el usuario:', error);
      })
  }

  
                                                                      
  
  registrarClick(click){
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.http.post(`${environment.url_endpoint}/clicks`, { userId, click })
        .subscribe(response => {
          console.log('Click registrado:', response);
        });
    }
    
  }

  getUsuarios(): Observable<User[]> {
    // Recuperar el token almacenado en localStorage
    const token = localStorage.getItem('authToken');
  
    // Verificar si el token existe
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
      return this.http.get<User[]>(`${environment.url_endpoint}/clicks/users`, { headers });
    } else {
      // Manejar el caso en que no se encuentra el token
      return throwError(() => new Error('No se encontró el token de autenticación'));
    }
  }
  
  
}
