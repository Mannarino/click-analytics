import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IdiomaService } from 'src/app/services/idioma.service';
import { VisitsService } from 'src/app/services/visits.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  aplicarAnimacion = false;
  ocultar = false
  
  form = new FormGroup({
    selectedLanguage: new FormControl('es',Validators.required)
  });

constructor(private idiomaService:IdiomaService, 
            private router: Router, 
            private visitsService:VisitsService,
            private languageService:LanguageService
            ) 
{ 
 
}

ngOnInit(): void {
 
  
 
   //colocar en el control de idioma el idioma guardado o el por defecto
    this.form.get('selectedLanguage').setValue(this.languageService.getStoreLanguage())
    

  //comportamiento cada ves que el usuario elije un idioma
  this.form.get('selectedLanguage').valueChanges.subscribe((value) => {
    this.marcarClick(this.form.get('selectedLanguage').value) 
    this.languageService.getStudies()
    this.languageService.setLanguage(this.form.get('selectedLanguage').value)
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

