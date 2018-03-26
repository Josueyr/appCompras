import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDIznDk6HV0ZcPtpg2G9sFt9PNd5PaMGaM",
      authDomain: "comprasapp-3f1be.firebaseapp.com",
      databaseURL: "https://comprasapp-3f1be.firebaseio.com",
      projectId: "comprasapp-3f1be",
      storageBucket: "comprasapp-3f1be.appspot.com",
      messagingSenderId: "1073642071195"
    })
  }

}
