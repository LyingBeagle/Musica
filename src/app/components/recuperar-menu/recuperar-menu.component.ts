import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-menu',
  templateUrl: './recuperar-menu.component.html',
  styleUrls: ['./recuperar-menu.component.scss'],
    standalone:false
})
export class RecuperarMenuComponent {

  constructor(private router: Router) { }

  goToMenu(){
    this.router.navigate(['/home']);
  }

}
