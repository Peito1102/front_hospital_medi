import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HospitalComponent } from './components/hospital/hospital.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,HospitalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombreProyecto = 'front_hospital_medi';
}
