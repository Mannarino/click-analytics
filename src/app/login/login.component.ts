import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoggedBadly= false
  serverInternalError=false
  imgCargando = false 

  constructor(private loginService:LoginService,
    private router: Router) { }

  form = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
  }
  get userbane() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }

  login(){
    this.LoggedBadly= false
    this.serverInternalError=false
    this.imgCargando = true
    //console.log(this.form.value)
    if(!this.form.valid){return console.log('not valid form')}
    this.loginService.loginUser(this.form.value)
    .subscribe( (value) => {
      this.form.reset()
      localStorage.setItem('auth','true')
      this.imgCargando = false
      
       
        this.router.navigate(['/admin'] )
      
    },error=>{
      this.imgCargando = false
      console.log(error.status)
      if(error.status===500){
        this.LoggedBadly =true
      }
      if(error.status===0){
        this.serverInternalError =true
      }
      console.log('hubo un error')
    })  
  }

   //method called when user press enter key------
   enterEvent() {
    this.login() 
  }
}
