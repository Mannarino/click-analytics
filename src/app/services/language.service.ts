// Definición de constantes globales en el archivo del servicio
const LANGUAGE_ES = 'es';
const LANGUAGE_EN = 'en';

import { Injectable } from '@angular/core';
import { cursos,carreras,careers,courses } from '../../assets/data';
import { TranslateService } from '@ngx-translate/core';
import { Studies } from '../interfaces/studies';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
 
  private studiesSubject = new BehaviorSubject<Studies>(this.getCurrentStudies());
  carreras=carreras
  cursos=cursos
  careers=careers
  courses=courses
  constructor( private translate: TranslateService) { }
  
  setLanguage(language:string){
    
     localStorage.setItem('language',language) 
     this.translate.use(language);
     // Emitir el nuevo valor cuando se cambia el idioma
     this.studiesSubject.next(this.getCurrentStudies());
  }
  getCurrentStudies():Studies{
    let studies= {} as Studies
    if(localStorage.getItem('language')=== LANGUAGE_ES){

        studies['carreras']=this.carreras,
        studies['cursos']=this.cursos
     }
    else{
      
      studies['carreras']=this.careers,
      studies['cursos']=this.courses
      }
      return studies
    
  }
  getStudies(): Observable<Studies> {
    // Retornar el observable del BehaviorSubject para que se puedan suscribir y recibir actualizaciones
    return this.studiesSubject.asObservable();
  }
  getStoreLanguage(){
    const storedLanguage = localStorage.getItem('language');

    if (!storedLanguage) {
      this.setLanguage(LANGUAGE_ES); // Idioma predeterminado
      return LANGUAGE_ES;
    }
    if (storedLanguage === LANGUAGE_ES) {
      this.setLanguage(LANGUAGE_ES);
      return LANGUAGE_ES;
    } else {
      this.setLanguage(LANGUAGE_EN);
      return LANGUAGE_EN;
    }
  }
}
