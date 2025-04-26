import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta-menu',
  templateUrl: './crear-cuenta-menu.component.html',
  styleUrls: ['./crear-cuenta-menu.component.scss'],
  standalone:false
})
export class CrearCuentaMenuComponent {

  constructor(private router: Router) { }

  goToLogin(){
    this.router.navigate(['/login']);
  }

}
