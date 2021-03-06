import { Component } from '@angular/core';

// Importa dependĂȘncias
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(

    // Injeta dependĂȘncias
    public auth: AngularFireAuth
  ) {}

}
