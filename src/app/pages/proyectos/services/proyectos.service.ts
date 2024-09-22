import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyect } from '../interfaces/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private jsonUrl = 'assets/proyectos.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) {}

  getProyectos(): Observable<Proyect[]> {
    return this.http.get<Proyect[]>(this.jsonUrl);
  }
}
