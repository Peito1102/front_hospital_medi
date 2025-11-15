import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, 
            RouterModule,
            ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;

  passwordFieldType: string = 'password';
  passwordIcon: string = 'bi bi-eye-slash-fill';

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      dni: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern('^[0-9]*$')
      ]],
      celular: ['', [
        Validators.required, 
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.pattern('^[0-9]*$')
      ]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePasswordVisibility(): void {
    if (this.passwordFieldType === 'password') {
      this.passwordFieldType = 'text';
      this.passwordIcon = 'bi bi-eye-fill';
    } else {
      this.passwordFieldType = 'password';
      this.passwordIcon = 'bi bi-eye-slash-fill';
    }
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    console.log('Formulario VÁLIDO, enviando:', this.registerForm.value);
  }

  onNumericInput(event: Event, controlName: string, maxLength: number): void {
  const input = event.target as HTMLInputElement;
  const currentValue = input.value;
  
  let cleanedValue = currentValue.replace(/[^0-9]/g, '');

  if (cleanedValue.length > maxLength) {
    cleanedValue = cleanedValue.substring(0, maxLength);
  }

  if (currentValue !== cleanedValue) {
    input.value = cleanedValue;
    
    this.registerForm.get(controlName)?.setValue(cleanedValue);
  }
}
  
}
