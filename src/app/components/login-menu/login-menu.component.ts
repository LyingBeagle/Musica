import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss'],
  standalone: false,
})
export class LoginMenuComponent {
  constructor(private router: Router, private authService: AuthService) {}

  // Método para iniciar sesión
  login(form: any) {
    const credentials = {
      nombreUsuario: form.nombreUsuario,
      contrasena: form.contrasena,
    };

    console.log('Datos enviados al backend:', credentials); // Verificar datos

    this.authService.login(credentials).subscribe(
      (response: any) => {
        console.log('Inicio de sesión exitoso:', response);
        alert('Inicio de sesión exitoso');
        // Guardar el token en el almacenamiento local
        localStorage.setItem('token', response.token);
        // Redirigir al usuario a la página principal o dashboard
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        alert('Error al iniciar sesión: ' + error.error);
      }
    );
  }

  goToCrearCuenta() {
    this.router.navigate(['/crear-cuenta']);
  }

  goToRecuperar() {
    this.router.navigate(['/recuperar']);
  }

  validateUser() {
    this.authService.validateToken().subscribe(
      (response) => {
        console.log('Token válido:', response);
        alert('Usuario validado exitosamente');
      },
      (error) => {
        console.error('Token inválido:', error);
        alert('Error al validar el usuario');
      }
    );
  }
}
