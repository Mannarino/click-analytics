import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  constructor() { }

  
  private idiomaSource = new BehaviorSubject<string>('');
  idioma$ = this.idiomaSource.asObservable();
  //////////////////
  //creo un metodo que al llamarse enviara un valor al observable y desde
  //el observable a los que esten suscriptos a el
  enviarIdioma(mensaje: string) {
    this.idiomaSource.next(mensaje);
  }
  /////////////////////////////
}
