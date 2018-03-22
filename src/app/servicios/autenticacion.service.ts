import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute} from '@angular/router';

@Injectable()
export class AutenticacionService {

  error: string;

  constructor(private activatedrouter: ActivatedRoute, private router: Router) { }

  registroUsuario(userdata){
    firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password)
      .catch(error => {
        console.log("Error ->", error);
      })
  }

  inicioSesion(userdata){
    firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password)
      .then(response => {
        this.router.navigate(['/inicio']);
      })
      .catch(error =>{
        this.error = error.code;
      })
  }

  isAuthenticated(){
    const user = firebase.auth().currentUser;
    if (user)
      return true;
    else
      return false;
  }

  logout(){
    firebase.auth().signOut();
  }
}
