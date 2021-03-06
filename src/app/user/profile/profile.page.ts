import { Component, OnInit } from '@angular/core';

// Importa dependĂȘncias
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(

    // Injeta dependĂȘncias
    public auth: AngularFireAuth
  ) { }

  ngOnInit() {}

  toProfile() {
    window.open('https://myaccount.google.com/', '_blank');
    return false;
  }
}
