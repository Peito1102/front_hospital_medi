import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HospitalComponent } from './components/hospital/hospital.component';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombreProyecto = 'front_hospital_medi';
}
