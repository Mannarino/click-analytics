import { Component, OnInit} from '@angular/core';
import { IdiomaService } from '../../services/idioma.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  idioma = 'spanish'
  constructor(private idiomaService:IdiomaService) { }

  ngOnInit(): void {
    this.idioma = localStorage.getItem('idioma')
    console.log(this.idioma)
    this.idiomaService.idioma$.subscribe( idioma =>{
      this.idioma = idioma
    })
  }
  
}
