import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../entities/login-request.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const loginRequest: LoginRequest = {
      username: this.username,
      password: this.password
    };

    this.authService.login(loginRequest).subscribe({
      next: (response) => {
        const token = response.headers.get('Authorization');
        console.log('Hola');
        console.log(token);
        if (token) {
          console.log('seguimos');
          this.authService.saveToken(token);
          console.log('Token guardado:', token);
          this.router.navigate(['/home']);
        }
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.errorMessage = 'Credenciales incorrectas';
        } else {
          this.errorMessage = 'Error al iniciar sesión';
        }
      },
    });
  }
}