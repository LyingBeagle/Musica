import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss'],
  standalone:false
})
export class LoginMenuComponent {

  constructor(private router: Router) { }

  goToCrearCuenta(){
    this.router.navigate(['/crear-cuenta']);
  }

}
