import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-crear-cuenta-menu',
  templateUrl: './crear-cuenta-menu.component.html',
  styleUrls: ['./crear-cuenta-menu.component.scss'],
  standalone: false,
})
export class CrearCuentaMenuComponent {
  constructor(private router: Router, private authService: AuthService) {}

  // Método para registrar un usuario
  register(form: any) {
    const userData = {
      nombreUsuario: form.nombreUsuario,
      rut: form.rut,
      correo: form.correo,
      region: form.region,
      comuna: form.comuna,
      contrasena: form.contrasena,
      confirmarContrasena: form.confirmarContrasena,
    };

    console.log('Datos enviados al backend:', userData); // Verificar datos

    if (userData.contrasena !== userData.confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.authService.register(userData).subscribe(
      (response) => {
        console.log('Usuario registrado:', response);
        alert('Usuario registrado exitosamente');
        this.router.navigate(['/login']); // Redirigir al login
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        alert('Error al registrar usuario');
      }
    );
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}