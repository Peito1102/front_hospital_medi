import { Routes } from '@angular/router';
import { HospitalComponent } from './components/hospital/hospital.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    // 🏠 Grupo de rutas con header + footer
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HospitalComponent }, // http://localhost:4200/
      { path: 'home', component: HospitalComponent },
    ],
  },

  // 🔐 Grupo de rutas de autenticación (solo header)
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ],
  },

  // 🚧 Redirección si la ruta no existe
  { path: '**', redirectTo: '' },
];
