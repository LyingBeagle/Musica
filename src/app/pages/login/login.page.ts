import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogin(credentials: { username: string; password: string }) {
    // aquí recibes el evento desde el componente
    console.log('LoginPage recibió:', credentials);
    // llama a tu servicio de auth...
  }
  

}
