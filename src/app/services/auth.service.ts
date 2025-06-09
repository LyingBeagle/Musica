import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // URL base del backend

  constructor(private http: HttpClient) {}

  // Método para registrar un usuario
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // Método para iniciar sesión
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Método para validar el token
  validateToken(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.apiUrl}/validate`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
