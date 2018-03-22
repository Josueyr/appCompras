import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticacionService} from '../../servicios/autenticacion.service';

@Component({
  selector: 'app-inises',
  templateUrl: './inises.component.html',
  styleUrls: ['./inises.component.css']
})
export class InisesComponent implements OnInit {

  loginForm: FormGroup;
  userdata: any;

  mensaje: string;
  error: boolean = false;

  constructor(private formBuilder: FormBuilder, 
              private autenticacionService: AutenticacionService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
       'email': ['', [Validators.required, Validators.email]], 
       'password': ['', [Validators.required, 
                        Validators.pattern('[A-Za-z0-9!?-]{6,12}'), 
                        Validators.minLength(6)]]
    })
  }

  onSubmit(){
    this.userdata = this.saveUserdata();
    this.autenticacionService.inicioSesion(this.userdata)
    setTimeout(() => {
      if(this.isAuth() === false){
        this.error = true;
        switch (this.autenticacionService.error){
          case ('auth/invalid-email'):{ 
            this.mensaje = "El email no tiene un formato correcto";
            break; 
          } 
          case ('auth/user-not-found'):{ 
            this.mensaje = "Usuario no dado de alta";
            break; 
          } 
          case ('auth/wrong-password'):{ 
            this.mensaje = "Contraseña incorrecta";
            break; 
          } 
           default: { 
            this.mensaje = "Error al iniciar sesión: " + this.autenticacionService.error;
            break; 
          } 
        }
      }      
    }, 1000);
      
  }
  
  saveUserdata(){
    const saveUserdata = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }
    return saveUserdata;
  }

  isAuth(){
    return this.autenticacionService.isAuthenticated();
  }
}
