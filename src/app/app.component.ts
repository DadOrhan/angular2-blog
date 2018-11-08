import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDPdkmp0QkzSiykZ8zaV9uuao8u3clKyvo",
      authDomain: "blog-angular-42f70.firebaseapp.com",
      databaseURL: "https://blog-angular-42f70.firebaseio.com",
      projectId: "blog-angular-42f70",
      storageBucket: "blog-angular-42f70.appspot.com",
      messagingSenderId: "148726429173"
    };
    firebase.initializeApp(config);

  }


}
