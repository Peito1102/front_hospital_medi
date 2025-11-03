import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, 
            FormsModule, 
            RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // Variables para vincular al formulario
  formData = {
    correo: '',
    nombre: '',
    apellidos: '',
    tipoDocumento: 'DNI',
    documento: '',
    celular: '',
    contrasena: ''
  };

  // Lógica para el botón de mostrar/ocultar contraseña
  passwordFieldType: string = 'password';
  passwordIcon: string = 'bi bi-eye-slash-fill'; // Asegúrate de tener Bootstrap Icons

  constructor() { }

  togglePasswordVisibility(): void {
    if (this.passwordFieldType === 'password') {
      this.passwordFieldType = 'text';
      this.passwordIcon = 'bi bi-eye-fill';
    } else {
      this.passwordFieldType = 'password';
      this.passwordIcon = 'bi bi-eye-slash-fill';
    }
  }

  onSubmit(): void {
    console.log('Formulario enviado:', this.formData);
    // Aquí iría tu lógica para registrar al usuario
  }
}
