import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { IdiomaService } from '../services/idioma.service';

import { VisitsService } from '../services/visits.service';

@Component({
  selector: 'app-sitio',
  templateUrl: './sitio.component.html',
  styleUrls: ['./sitio.component.css']
})
export class SitioComponent implements OnInit {
  title = 'cliente';
  aplicarAnimacion = false;
  ocultar = false
  
  form = new FormGroup({
    selectedLanguage: new FormControl('spanish',Validators.required)
  });
  idioma = 'spanish'
  constructor(private idiomaService:IdiomaService, 
              private router: Router, 
              private visitsService:VisitsService
              ) 
  { }

  ngOnInit(): void {
   
    
   

    if(localStorage.getItem('idioma'))
    {
      this.idioma =localStorage.getItem('idioma')
      this.form.get('selectedLanguage').setValue(this.idioma)
      this.idiomaService.enviarIdioma(this.form.get('selectedLanguage').value)
    }
    else{
      localStorage.setItem('idioma','spanish')
    }

    //comportamiento cada ves que el usuario elije un idioma
    this.form.get('selectedLanguage').valueChanges.subscribe((value) => {
      this.marcarClick(this.form.get('selectedLanguage').value) 
      localStorage.setItem('idioma',this.form.get('selectedLanguage').value)
      this.idiomaService.enviarIdioma(this.form.get('selectedLanguage').value)
      this.idioma = this.form.get('selectedLanguage').value
      });
      
    }

  //comportamiento de interfaz ocultar iconos  
  ocultarElementos() {
    this.aplicarAnimacion = true;
    this.ocultar = true
  }

  
  marcarClick(click){
    this.visitsService.registrarClick(click)
  }

}
