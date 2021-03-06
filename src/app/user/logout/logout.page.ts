import { Component, OnInit } from '@angular/core';

// Importa dependĂȘncias
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(

    // Injeta dependĂȘncias
    public auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {}

  logout() {
    this.auth.signOut()
    .then(
      () => {

        // Redireciona para 'inicio'
        this.router.navigate(['/home']);
      }
    )
    .catch();
  }
}
