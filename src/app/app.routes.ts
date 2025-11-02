import { Routes } from '@angular/router';
import { HospitalComponent } from './components/hospital/hospital.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [

  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [loginGuard],
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },

  // Rutas privadas (solo accesibles si estás logeado)
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: HospitalComponent },
    ],
  },

  { path: '**', redirectTo: '' }
];
